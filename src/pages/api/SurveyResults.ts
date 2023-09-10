import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as openAi from "./OpenAiProvider"
import { SurveyQuestionType } from "@/app/survey/Questions";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return processGet(req, res)
}


const processGet = async (req: NextApiRequest, res: NextApiResponse) => {

    const questionId = req.query.q
    const results = await GetSurveyResultsData(questionId as SurveyQuestionType)
    if (!results) {
        return res.status(400).json([])
    }
    return res.status(200).json(results.map(r => r.name))
}

export const GetSurveyResultsData = async (questionId: SurveyQuestionType) => {
    const client = new PrismaClient()
    let results
    if (questionId === SurveyQuestionType.thingsInTheWay) {
        results = await client.thingsInTheWay.findMany({
            orderBy: { createdAt: "asc" },
        })
    }
    else if (questionId === SurveyQuestionType.thingsThatHelp) {
        results = await client.thingsThatHelp.findMany({
            orderBy: { createdAt: "asc" },
        })
    }
    return results
}
