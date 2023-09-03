import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return processPost(req, res)
}


const processPost = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = JSON.parse(req.body)
    console.log("THE POSTED DATA = ", data)
    const client = new PrismaClient()
    const results = await client.thingsInTheWay.create({
        data: {
            name: data.name,
        },
    })

    return res.status(200).json(results)
}
