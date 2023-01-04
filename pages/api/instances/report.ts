// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from "@prisma/client"
import prismac from "../../../lib/prisma"
import { ACCESS_TOKEN, BASE_URL, bearerTokenFromHeaders, maintainers, verifyToken } from "../../../lib/config"
import generator, { Entity, Response } from "megalodon"

const dotenv = require('dotenv')
dotenv.config()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const reportData: { contact: string; uri: string; report: string } =
            req.body
        
        try {
            const savedReport = await prismac.reports.create({
                data: {
                    reporter: reportData.contact,
                    uri: reportData.uri,
                    reason: reportData.report
                },
            })
            
            const mastoClient = generator(
                'mastodon',
                BASE_URL,
                ACCESS_TOKEN
            )
            
            
            let maintainerMentions = ''
            
            maintainers.forEach((item) => {
                maintainerMentions += '@' + item.user + '@' + item.domain + ' '
            })
            
            const toot =
                maintainerMentions +
                reportData.uri + ' has been reported by ' + reportData.contact.split('@').join('[at]')
            if (process.env.ACCOUNT_IS_MISSKEY) {
                const userReq = await fetch(`${BASE_URL}/api/users/show`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`
                    },
                    body: JSON.stringify({
                        username: maintainers[0].user,
                        host: maintainers[0].domain
                    })
                });
                const userFind = await userReq.json();
                await fetch(`${BASE_URL}/api/notes/create`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                    },
                    body: JSON.stringify({
                        text: toot,
                        visibility: 'specified',
                        visibleUserIds: [userFind.id]
                    })
                });
            } else {
            mastoClient
                .postStatus(toot, { visibility: 'direct' })
                .then((res: Response<Entity.Status>) => {
                    console.log(res.data)
                })
            }
            res.status(200).json({
                message:
                    'Report received!' + JSON.stringify(toot),
                type: 'success',
            })
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                if (err.code === 'P2002') {
                    res.status(400).json({
                        message: 'Instance has already been reported! Please be patient while site operators review this report.',
                        type: 'error',
                    })
                } else {
                    res.status(400).json({
                        message: err.message,
                        type: 'error',
                    })
                }
            } else if (err instanceof Prisma.PrismaClientValidationError) {
                res.status(400).json({ message: err.message, type: 'error' })
            } else {
                console.log(err);
                res.status(500).json({ message: 'Something went wrong', type: 'error' })
            }
        }
    } else if (req.method === 'GET') {
        
        if (await verifyToken(prismac, bearerTokenFromHeaders(req.headers))) {
            const reports = await prismac.reports.findMany()
            
            return res.status(200).json(reports)
        }
        
    }
    
    return res
        .status(405)
        .json({ message: 'Invalid API Method', type: 'error' })
}