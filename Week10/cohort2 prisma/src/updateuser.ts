import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

interface updateUserParams{
    name :string,
    address: string
}

async function updateuser(email:string,{
    name,
    address
}:updateUserParams) {
    
    const res = await prisma.user.update({
        where:{
            email
        },
        data:{
            name,
            address
        }
    }
    )

    console.log(res);
    

}

updateuser("Sparsh@gmail.com",{name:"Sparsh Gupta",address:"Mohali"})