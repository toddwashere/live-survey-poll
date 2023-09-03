import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as openAi from "./OpenAiProvider"


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return processGet(req, res)
}


const processGet = async (req: NextApiRequest, res: NextApiResponse) => {

    const client = new PrismaClient()
    const results = await client.thingsInTheWay.findMany()

    // const moderatedPhrases = await openAi.removeInappropriatePhrases(results.map(r => r.name))

    const summary = await openAi.groupSimilarPhrases(results.map(r => r.name))

    console.log("THE RAW SUMMARY = ", summary)

    const rawGroupedPhrases = summary.data.choices[0].message?.content
    if (!rawGroupedPhrases) {
        console.log("No rawGroupedPhrases: ", summary)
        throw new Error("No rawGroupedPhrases")
    }
    const parsed = JSON.parse(rawGroupedPhrases)

    return res.status(200).json(parsed)
}
