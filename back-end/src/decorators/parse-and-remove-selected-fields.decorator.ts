import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { GraphQLResolveInfo as Info } from 'graphql'
import { parseSelectedFields } from 'prisma-parse-selected-fields'

export const ParseAndRemoveSelectedFields = createParamDecorator(
   (excludeFields: string[], context: ExecutionContext) => {
      // ! Need transform value to instance of Object Type with class-transform
      // ! to remove unexpected fields user entered
      // TODO
      function deleteFields(excludeFields: string[], obj: object) {
         excludeFields?.forEach((property) => delete obj[property])

         return obj
      }

      const ctx = GqlExecutionContext.create(context)
      const info = ctx.getInfo<Info>()
      const selectedFields = parseSelectedFields(info)

      return deleteFields(excludeFields, selectedFields)
   }
)
