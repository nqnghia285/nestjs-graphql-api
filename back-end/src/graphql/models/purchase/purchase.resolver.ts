import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregatePurchase,
   Purchase,
   PurchaseAggregateArgs,
   PurchaseGroupBy,
   PurchaseGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
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
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Purchase'))
   async aggregatePurchase(
      @Args() args: PurchaseAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Purchase'))
   async countPurchase(@Args() args: PurchaseCountArgs) {
      return handleResolver(this.purchase, 'count', args)
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Purchase'))
   async createPurchase(
      @Args() args: PurchaseCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'create', { ...args, select })
   }

   @Mutation(() => [Purchase])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Purchase'))
   async createManyPurchase(
      @Args()
      args: PurchaseCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'createMany', { ...args, select })
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Purchase'))
   async deletePurchase(
      @Args() args: PurchaseDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Purchase'))
   async deleteManyPurchase(@Args() args: PurchaseDeleteManyArgs) {
      return handleResolver(this.purchase, 'deleteMany', args)
   }

   @Query(() => Purchase, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Purchase'))
   async findFirstPurchase(
      @Args() args: PurchaseFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findFirst', { ...args, select })
   }

   @Query(() => [Purchase])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Purchase'))
   async findManyPurchase(
      @Args() args: PurchaseFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findMany', { ...args, select })
   }

   @Query(() => Purchase, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Purchase'))
   async findUniquePurchase(
      @Args() args: PurchaseFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findUnique', { ...args, select })
   }

   @Query(() => PurchaseGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Purchase'))
   async groupByPurchase(
      @Args() args: PurchaseGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'groupBy', { ...args, select })
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Purchase'))
   async updatePurchase(
      @Args() args: PurchaseUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'update', { ...args, select })
   }
}
