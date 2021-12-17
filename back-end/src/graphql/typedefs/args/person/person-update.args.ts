import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOnePersonArgs } from '~/generated/prisma-nestjs-graphql'
import { PersonInclude, PersonSelect } from '../..'

@ArgsType()
export class PersonUpdateArgs extends UpdateOnePersonArgs {
   @Field(() => PersonSelect, { nullable: true })
   select?: PersonSelect | null

   @Field(() => PersonInclude, { nullable: true })
   include?: PersonInclude | null
}
