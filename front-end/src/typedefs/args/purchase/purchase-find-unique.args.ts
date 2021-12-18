import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePurchaseArgs } from '~/generated/prisma-nestjs-graphql'
import { PurchaseInclude, PurchaseSelect } from '../..'

@ArgsType()
export class PurchaseFindUniqueArgs extends FindUniquePurchaseArgs {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
