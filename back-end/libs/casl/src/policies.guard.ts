import { ApiConfigService } from '@libs/api-config'
import { LoggerService } from '@libs/logger'
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
import { AppSubjects } from '.'
import { CaslAbilityFactory } from './casl.service'
import { PolicyOption } from './policy.type'

@Injectable()
export class PoliciesGuard implements CanActivate {
   constructor(
      private readonly reflector: Reflector,
      private readonly caslAbilityFactory: CaslAbilityFactory,
      private readonly prisma: PrismaService,
      private readonly apiConfig: ApiConfigService,
      private readonly logger: LoggerService
   ) {}

   async canActivate(context: ExecutionContext) {
      const policyOption = this.reflector.get<PolicyOption>(
         CHECK_POLICIES_KEY,
         context.getHandler()
      )

      const user = context.getArgByIndex<IUserInfo>(0)

      // ! begin: Admin
      if (user?.role === Role.ADMIN) {
         return true
      }
      // ! end

      const args = context.getArgByIndex(1)
      const ability = this.caslAbilityFactory.createForUser(user)

      if (this.apiConfig.system.node_env !== 'production') {
         this.logger.log(PoliciesGuard.name, PoliciesGuard.name)
         this.logger.log(user, 'User')
         this.logger.log(args, 'Args')
      }

      // ! begin: Staff
      if (user?.role === Role.STAFF) {
         if (policyOption.action === Action.CREATE) {
            if (
               policyOption.model === 'Person' ||
               policyOption.model === 'User'
            ) {
               throwForbiddenException(policyOption.action, policyOption.model)
            }

            return true
         }

         if (policyOption.action === Action.DELETE) {
            if (policyOption.model === 'Comment') {
               return true
            }

            throwForbiddenException(policyOption.action, policyOption.model)
         }

         if (policyOption.action === Action.READ) {
            if (policyOption.model === 'Person') {
               throwForbiddenException(policyOption.action, policyOption.model)
            }

            if (policyOption.model === 'User') {
               const object = await this.prisma.user.findUnique({
                  where: args.where,
               })

               const subject = this.caslAbilityFactory.createSubjectInstance(
                  object,
                  policyOption.model
               )

               const allow = ability.can(policyOption.action, subject)

               if (!allow) {
                  throwForbiddenException(
                     policyOption.action,
                     policyOption.model
                  )
               }

               return allow
            }
         }

         if (policyOption.action === Action.UPDATE) {
            if (
               policyOption.model === 'Comment' ||
               policyOption.model === 'Post' ||
               policyOption.model === 'User'
            ) {
               const modelProperty = (
                  policyOption.model as string
               ).toLowerCase()

               const object = await this.prisma[modelProperty].findUnique({
                  where: args.where,
               })

               const subject = this.caslAbilityFactory.createSubjectInstance(
                  object,
                  policyOption.model
               )

               const allow = ability.can(policyOption.action, subject)

               if (!allow) {
                  throwForbiddenException(
                     policyOption.action,
                     policyOption.model
                  )
               }

               return allow
            }
         }
      }
      // ! end

      // ! begin: Customer
      if (policyOption.action === Action.CREATE) {
         if (policyOption.model === 'Comment') {
            return true
         }

         throwForbiddenException(policyOption.action, policyOption.model)
      }

      if (policyOption.action === Action.READ) {
         if (
            policyOption.model === 'Comment' ||
            policyOption.model === 'Discount' ||
            policyOption.model === 'Laptop' ||
            policyOption.model === 'Post' ||
            policyOption.model === 'PriceMap'
         ) {
            return true
         }

         throwForbiddenException(policyOption.action, policyOption.model)
      }
      // ! end

      return !(
         typeof throwForbiddenException(
            policyOption.action,
            policyOption.model
         ) === 'function'
      )
   }
}

function throwForbiddenException(action: Action, model: AppSubjects) {
   throw new ForbiddenException(`You are not allowed to ${action} to ${model}`)
}
