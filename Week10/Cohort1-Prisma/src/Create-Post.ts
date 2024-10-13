import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query']});

async function main() {

    await prisma.post.create({
        data:{
            title:"SUNSET",
            content:"Sun is gone",
            authorId:1
        }
    })
    
}

main()