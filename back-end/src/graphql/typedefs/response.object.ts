import { Field, ObjectType } from '@nestjs/graphql'
import { GraphQLJSON } from 'graphql-scalars'

@ObjectType()
export class Response {
   @Field({ nullable: true })
   isSuccess?: boolean

   @Field({ nullable: true })
   message?: string

   @Field(() => GraphQLJSON, { nullable: true })
   data?: JSON

   @Field()
   action: string

   @Field(() => [GraphQLJSON])
   errors: JSON[]
}
