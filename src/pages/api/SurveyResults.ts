import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as openAi from "./OpenAiProvider"
import { SurveyQuestionId } from "@/app/survey/Questions";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return processGet(req, res)
}


const processGet = async (req: NextApiRequest, res: NextApiResponse) => {

    const questionId = req.query.q
    const results = await GetSurveyResultsData(questionId as SurveyQuestionId)
    if (!results) {
        return res.status(400).json([])
    }
    return res.status(200).json(results.map(r => r.name))
}

export const GetSurveyResultsData = async (questionId: SurveyQuestionId) => {
    const client = new PrismaClient()
    let results
    if (questionId === SurveyQuestionId.thingsInTheWay) {
        results = await client.thingsInTheWay.findMany({
            orderBy: { createdAt: "asc" },
        })
    }
    else if (questionId === SurveyQuestionId.thingsThatHelp) {
        results = await client.thingsThatHelp.findMany({
            orderBy: { createdAt: "asc" },
        })
    }
    return results
}
