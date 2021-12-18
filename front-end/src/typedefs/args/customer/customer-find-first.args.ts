import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstCustomerArgs } from '~/generated/prisma-nestjs-graphql'
import { CustomerInclude, CustomerSelect } from '../..'

@ArgsType()
export class CustomerFindFirstArgs extends FindFirstCustomerArgs {
   @Field(() => CustomerSelect, { nullable: true })
   select?: CustomerSelect | null

   @Field(() => CustomerInclude, { nullable: true })
   include?: CustomerInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
