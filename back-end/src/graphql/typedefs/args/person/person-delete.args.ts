import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOnePersonArgs } from '~/generated/prisma-nestjs-graphql'
import { PersonInclude, PersonSelect } from '../..'

@ArgsType()
export class PersonDeleteArgs extends DeleteOnePersonArgs {
   @Field(() => PersonSelect, { nullable: true })
   select?: PersonSelect | null

   @Field(() => PersonInclude, { nullable: true })
   include?: PersonInclude | null
}
