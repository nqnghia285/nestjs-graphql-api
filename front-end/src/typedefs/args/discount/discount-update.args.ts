import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOneDiscountArgs } from '~/generated/prisma-nestjs-graphql'
import { DiscountInclude, DiscountSelect } from '../..'

@ArgsType()
export class DiscountUpdateArgs extends UpdateOneDiscountArgs {
   @Field(() => DiscountSelect, { nullable: true })
   select?: DiscountSelect | null

   @Field(() => DiscountInclude, { nullable: true })
   include?: DiscountInclude | null
}
