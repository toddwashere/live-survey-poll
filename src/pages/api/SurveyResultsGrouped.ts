import { NextApiRequest, NextApiResponse } from "next";
import * as openAi from "./OpenAiProvider"
import { GetSurveyResultsData } from "./SurveyResults";
import { SurveyQuestionType } from "@/app/survey/Questions";
import { currentPresentationConfig } from "../../presentation-config";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return processGet(req, res)
}


const processGet = async (req: NextApiRequest, res: NextApiResponse) => {

    const questionId = req.query.q
    const results = await GetSurveyResultsData(questionId as SurveyQuestionType)
    if (!results) {
        return res.status(400).json([])
    }

    const surveyQuestions = currentPresentationConfig.questions

    // const moderatedPhrases = await openAi.removeInappropriatePhrases(results.map(r => r.name))
    const questionAsked = questionId === SurveyQuestionType.thingsInTheWay ? surveyQuestions[0].value : surveyQuestions[1].value
    const summary = await openAi.groupSimilarPhrases(questionAsked, results.map(r => r.name))

    console.log("THE RAW SUMMARY = ", summary)

    const rawGroupedPhrases = summary.data.choices[0].message?.content
    if (!rawGroupedPhrases) {
        console.log("No rawGroupedPhrases: ", summary)
        throw new Error("No rawGroupedPhrases")
    }
    const parsed = JSON.parse(rawGroupedPhrases)

    return res.status(200).json(parsed)
}
