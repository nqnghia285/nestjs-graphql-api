/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, PipeTransform } from '@nestjs/common'
import bcrypt from 'bcrypt'
import { CreateOneUserArgs } from '~/generated/prisma-nestjs-graphql'

@Injectable()
export class UserCreateArgsPipe implements PipeTransform<any> {
   async transform(value: any) {
      const data: CreateOneUserArgs = value
      if (data && data.data && data.data.password) {
         data.data.password = bcrypt.hashSync(
            data.data.password,
            bcrypt.genSaltSync(10)
         )
      }

      return value
   }
}
