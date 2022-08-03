import { prisma } from "../prisma";

interface PostRepository{
    username: string,
    message: string
}

export default {
    create: async({username, message}: PostRepository) => {
        await prisma.post.create({
            data: {
                username,
                message
            }
        })
    }
}