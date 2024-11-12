import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function getallusersAndPost(userId:number) {

    const rs1 = await prisma.user.findFirst({
        where:{
            id:userId
        }
    })

    const rs2 = await prisma.post.findMany({
        where:{
            authorId:userId
        }
    })

    console.log(rs1);
    log(rs2)
    
}

async function getallpostusingjoin(userId:number) {
            const todos = await prisma.post.findMany({
            where: {
                authorId: userId,
            },
            select: {
                User: true,
                title: true,
                content: true
            }
        });
        console.log(todos);
    
}

// getallusersAndPost(6);

getallpostusingjoin(6);