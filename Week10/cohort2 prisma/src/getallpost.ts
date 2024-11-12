import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function getallpost(authorId:number) {
    const res = await prisma.post.findMany({
        where:{
            authorId
        }
    })

    res.forEach(element => {

        if(element.published==false){
            console.log(element);   
        }
        
    });
    
}

getallpost(6);

