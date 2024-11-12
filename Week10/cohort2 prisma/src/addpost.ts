import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient

async function AddPost(title:string,content:string,authorId:number) {
    const res = await Prisma.post.create({
        data:{
            title,
            content,
            authorId
        }
    })


    if(res){
        console.log("Post added Successfullyy");
        
    }
    console.log(res);
       
}

AddPost("Sunrise","Glimpse of Sunrise from the Himalyan Peak",6 )
AddPost("PArty","Farewell paryy 2024",6 )
AddPost("Work Mode","At google office",6 )