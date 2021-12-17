import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOneCustomerArgs } from '~/generated/prisma-nestjs-graphql'
import { CustomerInclude, CustomerSelect } from '../..'

@ArgsType()
export class CustomerUpdateArgs extends UpdateOneCustomerArgs {
   @Field(() => CustomerSelect, { nullable: true })
   select?: CustomerSelect | null

   @Field(() => CustomerInclude, { nullable: true })
   include?: CustomerInclude | null
}
