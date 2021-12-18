import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOnePurchaseArgs } from '~/generated/prisma-nestjs-graphql'
import { PurchaseInclude, PurchaseSelect } from '../..'

@ArgsType()
export class PurchaseCreateArgs extends CreateOnePurchaseArgs {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null
}
