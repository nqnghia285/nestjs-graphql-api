import {
   Ability,
   AbilityBuilder,
   AbilityClass,
   ExtractSubjectType,
   InferSubjects,
} from '@casl/ability'
import { Injectable } from '@nestjs/common'
import { Role } from '~/generated/prisma-nestjs-graphql'
import {
   Comment,
   Customer,
   Discount,
   Laptop,
   Passage,
   Person,
   Post,
   PriceMap,
   Purchase,
   User,
} from '~/graphql/typedefs'
import { Action, IUserInfo } from '~/interface'

export type AppSubjects = InferSubjects<
   | typeof Comment
   | typeof Customer
   | typeof Discount
   | typeof Laptop
   | typeof Passage
   | typeof Person
   | typeof Post
   | typeof PriceMap
   | typeof Purchase
   | typeof User,
   true
>

export type AppAbility = Ability<[Action, AppSubjects]>

@Injectable()
export class CaslAbilityFactory {
   createForUser(user?: IUserInfo) {
      const { can, build } = new AbilityBuilder(
         Ability as AbilityClass<AppAbility>
      )
      if (user) {
         if (user.role === Role.ADMIN) {
            console.log(Role.ADMIN)
            // ? Apply to Admin
            can(
               [Action.CREATE, Action.DELETE, Action.READ, Action.UPDATE],
               [
                  'Comment',
                  'Customer',
                  'Discount',
                  'Laptop',
                  'Passage',
                  'Person',
                  'Post',
                  'PriceMap',
                  'Purchase',
                  'User',
               ]
            )
         } else {
            console.log(Role.STAFF)
            // ? Apply to Staff
            // ? can
            // * CREATE and READ action:
            can(
               [Action.CREATE, Action.READ],
               [
                  'Comment',
                  'Customer',
                  'Discount',
                  'Laptop',
                  'Post',
                  'PriceMap',
                  'Purchase',
               ]
            )
            // * DELETE action:
            can(Action.DELETE, 'Comment')
            // * READ action:
            can(Action.READ, 'User', { id: user.id })
            // * UPDATE action:
            can(Action.UPDATE, [
               'Customer',
               'Discount',
               'Laptop',
               'PriceMap',
               'Purchase',
            ])
            can(Action.UPDATE, 'Comment', {
               isStaff: true,
               authorId: user.id,
            })
            can(Action.UPDATE, 'Post', {
               authorId: user.id,
            })
            can(Action.UPDATE, 'User', { id: user.id })
         }
      } else {
         // ? Apply to customer
         // ? can
         // * CREATE and READ action:
         can([Action.CREATE, Action.READ], 'Comment')
         can(Action.READ, ['Discount', 'Laptop', 'Post', 'PriceMap'])
      }

      return build({
         detectSubjectType: (item) =>
            item.constructor as ExtractSubjectType<AppSubjects>,
      })
   }

   createSubjectInstance(source: any, subjectType: AppSubjects): AppSubjects {
      let target: AppSubjects = null
      switch (subjectType) {
         case 'Comment': {
            target = new Comment()
            break
         }
         case 'Customer': {
            target = new Customer()
            break
         }
         case 'Discount': {
            target = new Discount()
            break
         }
         case 'Laptop': {
            target = new Laptop()
            return target
         }
         case 'Passage': {
            target = new Passage()
            break
         }
         case 'Person': {
            target = new Person()
            break
         }
         case 'Post': {
            target = new Post()
            break
         }
         case 'PriceMap': {
            target = new PriceMap()
            break
         }
         case 'Purchase': {
            target = new Purchase()
            break
         }
         case 'User': {
            target = new User()
            break
         }
      }
      Object.assign(target, source)
      return target
   }
}
