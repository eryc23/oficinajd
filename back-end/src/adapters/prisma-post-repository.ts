import { prisma } from "../prisma";

interface PostRepository{
    name: string,
    message: string
}

export default {
    create: async({name, message}: PostRepository) => {
        await prisma.post.create({
            data:{
                name,
                message
            }
        })
    }
}