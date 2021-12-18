import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOneCustomerArgs } from '~/generated/prisma-nestjs-graphql'
import { CustomerInclude, CustomerSelect } from '../..'

@ArgsType()
export class CustomerCreateArgs extends CreateOneCustomerArgs {
   @Field(() => CustomerSelect, { nullable: true })
   select?: CustomerSelect | null

   @Field(() => CustomerInclude, { nullable: true })
   include?: CustomerInclude | null
}
