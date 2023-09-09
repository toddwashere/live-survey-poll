
import { SurveyQuestionId } from "@/app/survey/Questions";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return processPost(req, res)
}


const processPost = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = JSON.parse(req.body)
    console.log("THE POSTED DATA = ", data)
    const questionId = req.query.q
    console.log("THE QUESTION ID = ", questionId)
    const client = new PrismaClient()

    let results
    if (questionId === SurveyQuestionId.thingsInTheWay) {
        results = await client.thingsInTheWay.create({
            data: { name: data.name, },
        })
    } else if (questionId === SurveyQuestionId.thingsThatHelp) {
        results = await client.thingsThatHelp.create({
            data: { name: data.name, },
        })
    } else {
        throw new Error("Unknown questionId: " + questionId)
    }

    return res.status(200).json(results)
}
