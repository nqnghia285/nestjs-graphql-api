import { PrismaService } from '@libs/prisma'
import {
   CanActivate,
   ExecutionContext,
   ForbiddenException,
   Injectable,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { CHECK_POLICIES_KEY } from '~/decorators'
import { Role } from '~/generated/prisma-nestjs-graphql'
import { Action, IUserInfo } from '~/interface'
import { CaslAbilityFactory } from './casl.service'
import { PolicyOption } from './policy.type'

@Injectable()
export class PoliciesGuard implements CanActivate {
   constructor(
      private readonly reflector: Reflector,
      private readonly caslAbilityFactory: CaslAbilityFactory,
      private readonly prisma: PrismaService
   ) {}

   async canActivate(context: ExecutionContext): Promise<boolean> {
      const policyOption = this.reflector.get<PolicyOption>(
         CHECK_POLICIES_KEY,
         context.getHandler()
      )

      const user = context.getArgByIndex<IUserInfo>(0)

      if (user && user.role === Role.ADMIN) {
         return true
      }

      const args = context.getArgByIndex(1)
      const ability = this.caslAbilityFactory.createForUser(user)

      console.log('PoliciesGuard')
      console.log('user', user)
      console.log('args: ', args)

      if (policyOption.action === Action.CREATE) {
         const allow = ability.can(policyOption.action, policyOption.model)

         if (!allow) {
            throw new ForbiddenException(
               `You are not allowed to ${policyOption.action} to ${policyOption.model}`
            )
         }

         return allow
      }

      if (policyOption.action === Action.DELETE) {
         const allow = ability.can(policyOption.action, policyOption.model)

         if (!allow) {
            throw new ForbiddenException(
               `You are not allowed to ${policyOption.action} to ${policyOption.model}`
            )
         }

         return allow
      }

      if (policyOption.action === Action.READ) {
         const modelProperty =
            typeof policyOption.model === 'string'
               ? policyOption.model.toLowerCase()
               : policyOption.model.toString().toLowerCase().split(' ')[1]

         const object = await this.prisma[modelProperty].findFirst({
            where: args.where,
         })
         const subject = this.caslAbilityFactory.createSubjectInstance(
            object,
            policyOption.model
         )

         console.log('subject', subject)

         const allow = ability.can(policyOption.action, subject)

         if (!allow) {
            throw new ForbiddenException(
               `You are not allowed to ${policyOption.action} to ${policyOption.model}`
            )
         }

         return allow
      }

      if (policyOption.action === Action.UPDATE) {
         const modelProperty =
            typeof policyOption.model === 'string'
               ? policyOption.model.toLowerCase()
               : policyOption.model.toString().toLowerCase().split(' ')[1]

         const object = await this.prisma[modelProperty].findUnique({
            where: args.where,
         })
         const subject = this.caslAbilityFactory.createSubjectInstance(
            object,
            policyOption.model
         )
         const allow = ability.can(policyOption.action, subject)

         if (!allow) {
            throw new ForbiddenException(
               `You are not allowed to ${policyOption.action} to ${policyOption.model}`
            )
         }

         return allow
      }

      return false
   }
}
