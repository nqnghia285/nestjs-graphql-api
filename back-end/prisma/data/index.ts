import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function createTemplate() {
   const prisma = new PrismaClient()

   await prisma.user
      .create({
         data: {
            profile: {
               create: {
                  fullname: 'Admin',
                  phone: '+84987654321',
                  email: 'admin@gmail.com',
                  gender: 'MALE',
               },
            },
            password: bcrypt.hashSync('123456', bcrypt.genSaltSync(10)),
            role: 'ADMIN',
         },
      })
      .then((user) => console.log(`Created Admin user: `, user))
      .catch((err) => console.log(`Error`, err))

   await prisma.$disconnect()
}

createTemplate()
