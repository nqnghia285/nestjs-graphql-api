import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOnePurchaseArgs } from '~/generated/prisma-nestjs-graphql'
import { PurchaseInclude, PurchaseSelect } from '../..'

@ArgsType()
export class PurchaseDeleteArgs extends DeleteOnePurchaseArgs {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null
}
