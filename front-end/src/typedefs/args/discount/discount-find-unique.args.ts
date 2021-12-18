import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueDiscountArgs } from '~/generated/prisma-nestjs-graphql'
import { DiscountInclude, DiscountSelect } from '../..'

@ArgsType()
export class DiscountFindUniqueArgs extends FindUniqueDiscountArgs {
   @Field(() => DiscountSelect, { nullable: true })
   select?: DiscountSelect | null

   @Field(() => DiscountInclude, { nullable: true })
   include?: DiscountInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
