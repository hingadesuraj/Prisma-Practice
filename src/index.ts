import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



async function insertUser(username:string,firstName:string,lastName:string,password:string){
    const res  = await prisma.user.create({
        data:{
            email:username,
            firstName,
            lastName,
            password
        }
    })
    console.log(res)
}

