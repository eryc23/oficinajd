import { prisma } from "../prisma";

interface MessageRepository{
    username: string,
    message: string
}

export default {
    create: async({username, message}: MessageRepository) => {
        await prisma.post.create({
            data: {
                username, 
                message
            }
        })
    },
    get: async() => {
        return await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 10
        })
    }
}