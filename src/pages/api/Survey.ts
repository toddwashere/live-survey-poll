
import { SurveyQuestionType } from "@/app/survey/Questions";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "POST":
            return processPost(req, res)
        case "PUT":
            return processPut(req, res)
        case "DELETE":
            return processDelete(req, res)
        default:
            return res.status(404).send("Not Found")
    }

}


const processPost = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = JSON.parse(req.body)
    console.log("THE POSTED DATA = ", data)
    const questionId = req.query.q
    console.log("THE QUESTION ID = ", questionId)
    const client = new PrismaClient()

    let results
    if (questionId === SurveyQuestionType.AiProductUseCases) {
        results = await client.aiProductUseCases.create({
            data: { name: data.name, },
        })
    } else if (questionId === SurveyQuestionType.thingsInTheWay) {
        results = await client.thingsInTheWay.create({
            data: { name: data.name, },
        })
    } else if (questionId === SurveyQuestionType.thingsThatHelp) {
        results = await client.thingsThatHelp.create({
            data: { name: data.name, },
        })
    } else {
        throw new Error("Unknown questionId: " + questionId)
    }

    return res.status(200).json(results)
}

const processPut = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = JSON.parse(req.body)
    console.log("THE POSTED DATA = ", data)
    const questionId = req.query.q
    console.log("THE QUESTION ID = ", questionId)
    const client = new PrismaClient()

    let results
    if (questionId === SurveyQuestionType.AiProductUseCases) {
        results = await client.aiProductUseCases.update({
            where: { id: data.id },
            data: { name: data.name, },
        })
    } else if (questionId === SurveyQuestionType.thingsInTheWay) {
        results = await client.thingsInTheWay.update({
            where: { id: data.id },
            data: { name: data.name, },
        })
    } else if (questionId === SurveyQuestionType.thingsThatHelp) {
        results = await client.thingsThatHelp.update({
            where: { id: data.id },
            data: { name: data.name, },
        })
    } else {
        throw new Error("Unknown questionId: " + questionId)
    }

    return res.status(200).json(results)
}

const processDelete = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = JSON.parse(req.body)
    console.log("THE POSTED DATA = ", data)
    const questionId = req.query.q
    console.log("THE QUESTION ID = ", questionId)
    const client = new PrismaClient()

    let results
    if (questionId === SurveyQuestionType.AiProductUseCases) {
        results = await client.aiProductUseCases.delete({
            where: { id: data.id },
        })
    } else if (questionId === SurveyQuestionType.thingsInTheWay) {
        results = await client.thingsInTheWay.delete({
            where: { id: data.id },
        })
    } else if (questionId === SurveyQuestionType.thingsThatHelp) {
        results = await client.thingsThatHelp.delete({
            where: { id: data.id },
        })
    } else {
        throw new Error("Unknown questionId: " + questionId)
    }

    return res.status(200).json(results)

}
