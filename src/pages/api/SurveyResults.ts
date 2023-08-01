import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    processGet(req, res)
}


const processGet = async (req: NextApiRequest, res: NextApiResponse) => {

    const client = new PrismaClient()
    const results = await client.thingsInTheWay.findMany()

    res.status(200).json(results)
}
