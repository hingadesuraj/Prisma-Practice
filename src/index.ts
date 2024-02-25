import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// insert Data in DB

async function insertUser(
  username: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      firstName,
      lastName,
      password,
    },
    select: {
      id: true,
      email: true,
    },
  });
  console.log(res);
}

// insertUser('suraj@gmail.com','suraj','go','password');

// Update Data in DB

// interface in typescript 
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
    const res = await prisma.user.update({
        where: { email : username}, // where can you update data 
        data : {
            firstName,
            lastName
        },
        select:{
            firstName:true
        }

    })
    console.log(res)
}


// updateUser('suraj@gmail.com',{firstName:"surajbhau",lastName:"hingadebhau"});