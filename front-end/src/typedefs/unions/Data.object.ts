import { createUnionType } from '@nestjs/graphql'
import { User } from '../../prisma-nestjs-graphql'

export const Data = createUnionType({
   name: 'Data',
   types: () => [String, User],
})
