import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { Request } from 'express'

export const UserFindManyArgs = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
   const request = ctx.switchToHttp().getRequest<Request>()
   const args: Prisma.UserFindManyArgs = JSON.parse(<string>request.query.args)
   if (args && args.select) {
      args.select.password = false
   } else {
      args.select = {
         id: true,
         posts: true,
         createdAt: true,
         password: false,
         profile: true,
         role: true,
         updatedAt: true,
      }
   }

   return args
})
