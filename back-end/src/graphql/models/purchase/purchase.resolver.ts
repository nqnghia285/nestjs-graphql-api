import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregatePurchase,
   Purchase,
   PurchaseAggregateArgs,
   PurchaseGroupBy,
   PurchaseGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   PurchaseCreateAction,
   PurchaseDeleteAction,
   PurchaseReadAction,
   PurchaseUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PurchaseCountArgs,
   PurchaseCreateArgs,
   PurchaseCreateManyArgs,
   PurchaseDeleteArgs,
   PurchaseDeleteManyArgs,
   PurchaseFindFirstArgs,
   PurchaseFindManyArgs,
   PurchaseFindUniqueArgs,
   PurchaseUpdateArgs,
} from '../../typedefs'
import { PurchaseService } from './purchase.service'

@Resolver(() => Purchase)
export class PurchaseResolver {
   constructor(private readonly purchase: PurchaseService) {}

   @Query(() => AggregatePurchase)
   @CheckPoliciesGuard(PurchaseReadAction)
   async aggregatePurchase(
      @Args() args: PurchaseAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PurchaseReadAction)
   async countPurchase(@Args() args: PurchaseCountArgs) {
      return handleResolver(this.purchase, 'count', args)
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(PurchaseCreateAction)
   async createPurchase(
      @Args() args: PurchaseCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'create', { ...args, select })
   }

   @Mutation(() => [Purchase])
   @CheckPoliciesGuard(PurchaseCreateAction)
   async createManyPurchase(
      @Args()
      args: PurchaseCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'createMany', { ...args, select })
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(PurchaseDeleteAction)
   async deletePurchase(
      @Args() args: PurchaseDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PurchaseDeleteAction)
   async deleteManyPurchase(@Args() args: PurchaseDeleteManyArgs) {
      return handleResolver(this.purchase, 'deleteMany', args)
   }

   @Query(() => Purchase, { nullable: true })
   @CheckPoliciesGuard(PurchaseReadAction)
   async findFirstPurchase(
      @Args() args: PurchaseFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findFirst', { ...args, select })
   }

   @Query(() => [Purchase])
   @CheckPoliciesGuard(PurchaseReadAction)
   async findManyPurchase(
      @Args() args: PurchaseFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findMany', { ...args, select })
   }

   @Query(() => Purchase, { nullable: true })
   @CheckPoliciesGuard(PurchaseReadAction)
   async findUniquePurchase(
      @Args() args: PurchaseFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findUnique', { ...args, select })
   }

   @Query(() => PurchaseGroupBy)
   @CheckPoliciesGuard(PurchaseReadAction)
   async groupByPurchase(
      @Args() args: PurchaseGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'groupBy', { ...args, select })
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(PurchaseUpdateAction)
   async updatePurchase(
      @Args() args: PurchaseUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'update', { ...args, select })
   }
}
