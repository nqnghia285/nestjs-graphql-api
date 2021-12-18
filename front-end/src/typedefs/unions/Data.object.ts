import { createUnionType } from '@nestjs/graphql'

// ObjectType
export const Data = createUnionType({
   name: 'Data',
   types: () => [String, Object],
})
