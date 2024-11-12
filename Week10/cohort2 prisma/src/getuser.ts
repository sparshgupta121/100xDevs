import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function getuser(email:string) {

    const res = await prisma.user.findFirst({
        where:{
            email
        }
    })
    
    console.log(res?.name);
    
}

getuser("Sparsh@gmail.com")