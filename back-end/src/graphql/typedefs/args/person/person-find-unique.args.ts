import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePersonArgs } from '~/generated/prisma-nestjs-graphql'
import { PersonInclude, PersonSelect } from '../..'

@ArgsType()
export class PersonFindUniqueArgs extends FindUniquePersonArgs {
   @Field(() => PersonSelect, { nullable: true })
   select?: PersonSelect | null

   @Field(() => PersonInclude, { nullable: true })
   include?: PersonInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
