import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOneCustomerArgs } from '~/generated/prisma-nestjs-graphql'
import { CustomerInclude, CustomerSelect } from '../..'

@ArgsType()
export class CustomerDeleteArgs extends DeleteOneCustomerArgs {
   @Field(() => CustomerSelect, { nullable: true })
   select?: CustomerSelect | null

   @Field(() => CustomerInclude, { nullable: true })
   include?: CustomerInclude | null
}
