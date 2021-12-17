import { CanActivate, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host'
import { IUserInfo } from '~/interface'

@Injectable()
export class RolesGuard implements CanActivate {
   constructor(private reflector: Reflector) {}

   canActivate(context: ExecutionContextHost): boolean {
      const roles = this.reflector.get<string[]>('roles', context.getHandler())

      if (!roles) {
         return true
      }

      const user = context.getArgByIndex<IUserInfo>(0)

      return roles.includes(user.role)
   }
}
