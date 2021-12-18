import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOneDiscountArgs } from '~/generated/prisma-nestjs-graphql'
import { DiscountInclude, DiscountSelect } from '../..'

@ArgsType()
export class DiscountCreateArgs extends CreateOneDiscountArgs {
   @Field(() => DiscountSelect, { nullable: true })
   select?: DiscountSelect | null

   @Field(() => DiscountInclude, { nullable: true })
   include?: DiscountInclude | null
}
