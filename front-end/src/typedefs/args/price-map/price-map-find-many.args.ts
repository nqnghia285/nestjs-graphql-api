import { ArgsType, Field } from '@nestjs/graphql'
import { FindManyPriceMapArgs } from '~/generated/prisma-nestjs-graphql'
import { PriceMapInclude, PriceMapSelect } from '../..'

@ArgsType()
export class PriceMapFindManyArgs extends FindManyPriceMapArgs {
   @Field(() => PriceMapSelect, { nullable: true })
   select?: PriceMapSelect | null

   @Field(() => PriceMapInclude, { nullable: true })
   include?: PriceMapInclude | null
}
