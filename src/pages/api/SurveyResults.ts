import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as openAi from "./OpenAiProvider"


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return processGet(req, res)
}


const processGet = async (req: NextApiRequest, res: NextApiResponse) => {

    const client = new PrismaClient()
    const results = await client.thingsInTheWay.findMany()

    return res.status(200).json(results.map(r => r.name))
}
