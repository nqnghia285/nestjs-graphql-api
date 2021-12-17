import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOnePersonArgs } from '~/generated/prisma-nestjs-graphql'
import { PersonInclude, PersonSelect } from '../..'

@ArgsType()
export class PersonCreateArgs extends CreateOnePersonArgs {
   @Field(() => PersonSelect, { nullable: true })
   select?: PersonSelect | null

   @Field(() => PersonInclude, { nullable: true })
   include?: PersonInclude | null
}
