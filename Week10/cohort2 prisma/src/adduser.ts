import{PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

async function AddUser(email:string,name:string ,phone:number,likes: number,address :string) {
    
   const resp = await prisma.user.create({
        data:{
            email,
            name,
            phone,
            likes,
            address

        }
    })

    console.log(resp);

}

AddUser("Sparsh@gmail.com","Sparsh",8520,50,"Roorkee")