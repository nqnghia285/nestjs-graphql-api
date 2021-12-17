import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOnePriceMapArgs } from '~/generated/prisma-nestjs-graphql'
import { PriceMapInclude, PriceMapSelect } from '../..'

@ArgsType()
export class PriceMapDeleteArgs extends DeleteOnePriceMapArgs {
   @Field(() => PriceMapSelect, { nullable: true })
   select?: PriceMapSelect | null

   @Field(() => PriceMapInclude, { nullable: true })
   include?: PriceMapInclude | null
}
