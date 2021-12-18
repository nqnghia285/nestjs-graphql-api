import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOnePurchaseArgs } from '~/generated/prisma-nestjs-graphql'
import { PurchaseInclude, PurchaseSelect } from '../..'

@ArgsType()
export class PurchaseUpdateArgs extends UpdateOnePurchaseArgs {
   @Field(() => PurchaseSelect, { nullable: true })
   select?: PurchaseSelect | null

   @Field(() => PurchaseInclude, { nullable: true })
   include?: PurchaseInclude | null
}
