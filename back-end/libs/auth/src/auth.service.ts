import { PrismaService } from '@libs/prisma'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import { isEmail, isPhoneNumber } from 'class-validator'
import { IUserInfo } from '~/interface'

@Injectable()
export class AuthService {
   constructor(
      private jwtService: JwtService,
      private prismaService: PrismaService
   ) {}

   async validateUser(
      username: string,
      password: string
   ): Promise<IUserInfo | null> {
      let person: any

      console.log('username', username)
      console.log('password', password)

      if (isEmail(username)) {
         person = await this.prismaService.person.findUnique({
            where: { email: username },
            select: {
               email: true,
               fullname: true,
               gender: true,
               id: true,
               phone: true,
               user: {
                  select: {
                     password: true,
                     role: true,
                  },
               },
            },
         })
      } else if (isPhoneNumber(username, 'VN')) {
         console.log('isPhoneNumber')
         person = await this.prismaService.person.findUnique({
            where: { phone: username },
            select: {
               email: true,
               fullname: true,
               gender: true,
               id: true,
               phone: true,
               user: {
                  select: {
                     password: true,
                     role: true,
                  },
               },
            },
         })
         console.log('person', person)
      }

      if (
         person &&
         person.user &&
         bcrypt.compareSync(password, person.user.password)
      ) {
         const { user, ...rest } = person
         rest.phone = rest.phone?.trim()
         const profile = { role: user.role, ...rest }

         return profile
      }

      return null
   }

   createJWT(payload: any) {
      return this.jwtService.sign(payload, { algorithm: 'HS256' })
   }
}
