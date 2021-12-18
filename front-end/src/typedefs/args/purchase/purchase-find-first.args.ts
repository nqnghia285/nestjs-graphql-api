import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPurchaseArgs } from '~/generated/prisma-nestjs-graphql'
import { PurchaseInclude, PurchaseSelect } from '../..'

@ArgsType()
export class PurchaseFindFirstArgs extends FindFirstPurchaseArgs {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
