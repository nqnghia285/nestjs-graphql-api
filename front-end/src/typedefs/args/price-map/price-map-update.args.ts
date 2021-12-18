import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOnePriceMapArgs } from '~/generated/prisma-nestjs-graphql'
import { PriceMapInclude, PriceMapSelect } from '../..'

@ArgsType()
export class PriceMapUpdateArgs extends UpdateOnePriceMapArgs {
   @Field(() => PriceMapSelect, { nullable: true })
   select?: PriceMapSelect | null

   @Field(() => PriceMapInclude, { nullable: true })
   include?: PriceMapInclude | null
}
