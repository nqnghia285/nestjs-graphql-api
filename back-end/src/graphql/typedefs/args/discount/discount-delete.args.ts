import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOneDiscountArgs } from '~/generated/prisma-nestjs-graphql'
import { DiscountInclude, DiscountSelect } from '../..'

@ArgsType()
export class DiscountDeleteArgs extends DeleteOneDiscountArgs {
   @Field(() => DiscountSelect, { nullable: true })
   select?: DiscountSelect | null

   @Field(() => DiscountInclude, { nullable: true })
   include?: DiscountInclude | null
}
