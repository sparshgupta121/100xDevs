import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

prisma.users.findMany({
    where:{
        id:1
    }})

async function InsertUser(username:string,password:string,firstname:string,lastname:string
    ,email:string) {
    await prisma.users.create({
        data:{
            username,
            password,
            firstname,
            lastname,
            email
        }
    })
}

InsertUser("AMAN121","PAsd","AMAN","gupta","AMAN@gmail.com");       

async function getTodos(userID:number) {
    
}