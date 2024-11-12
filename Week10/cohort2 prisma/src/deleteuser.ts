import { PrismaClient } from "@prisma/client";
import { log } from "console";
const masti = new PrismaClient()

function deleteuser(email:string) {
    masti.user.delete({
        where:{
            email
        }
    }).then(res=>console.log("DeletedSuceess")).catch((e)=>console.log(e))
}

deleteuser("Sparsh@gmail.com")