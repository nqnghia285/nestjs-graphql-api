import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPersonArgs } from '~/generated/prisma-nestjs-graphql'
import { PersonInclude, PersonSelect } from '../..'

@ArgsType()
export class PersonFindFirstArgs extends FindFirstPersonArgs {
   @Field(() => PersonSelect, { nullable: true })
   select?: PersonSelect | null

   @Field(() => PersonInclude, { nullable: true })
   include?: PersonInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
