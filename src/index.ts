import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



async function insertUser(username:string,firstName:string,lastName:string,password:string){
    const res  = await prisma.user.create({
        data:{
            email:username,
            firstName,
            lastName,
            password
        },
        select:{
            id:true,
            email:true
        }
    })
    console.log(res)
}

insertUser('suraj@gmail.com','suraj','go','password');