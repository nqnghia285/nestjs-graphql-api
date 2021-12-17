import { ArgsType, Field } from '@nestjs/graphql'
import { FindManyPurchaseArgs } from '~/generated/prisma-nestjs-graphql'
import { PurchaseInclude, PurchaseSelect } from '../..'

@ArgsType()
export class PurchaseFindManyArgs extends FindManyPurchaseArgs {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null
}
