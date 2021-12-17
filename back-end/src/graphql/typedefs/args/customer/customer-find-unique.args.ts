import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueCustomerArgs } from '~/generated/prisma-nestjs-graphql'
import { CustomerInclude, CustomerSelect } from '../..'

@ArgsType()
export class CustomerFindUniqueArgs extends FindUniqueCustomerArgs {
   @Field(() => CustomerSelect, { nullable: true })
   select?: CustomerSelect | null

   @Field(() => CustomerInclude, { nullable: true })
   include?: CustomerInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
