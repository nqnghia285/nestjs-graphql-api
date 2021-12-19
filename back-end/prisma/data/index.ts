import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function createTemplate() {
   const prisma = new PrismaClient()

   await prisma.user
      .create({
         data: {
            profile: {
               create: {
                  fullname: process.env.fullname,
                  phone: process.env.phone,
                  email: process.env.email,
               },
            },
            password: bcrypt.hashSync(
               process.env.password,
               bcrypt.genSaltSync(10)
            ),
            role: 'ADMIN',
         },
      })
      .then((user) => console.log(`Created Admin user: `, user))
      .catch((err) => console.log(`Error`, err))

   await prisma.$disconnect()
}

createTemplate()
