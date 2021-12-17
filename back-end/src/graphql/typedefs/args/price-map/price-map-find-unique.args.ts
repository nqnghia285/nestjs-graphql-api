import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePriceMapArgs } from '~/generated/prisma-nestjs-graphql'
import { PriceMapInclude, PriceMapSelect } from '../..'

@ArgsType()
export class PriceMapFindUniqueArgs extends FindUniquePriceMapArgs {
   @Field(() => PriceMapSelect, { nullable: true })
   select?: PriceMapSelect | null

   @Field(() => PriceMapInclude, { nullable: true })
   include?: PriceMapInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
