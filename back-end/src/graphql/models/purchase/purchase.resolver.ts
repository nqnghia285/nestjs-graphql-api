import { ValidationPipe } from '@nestjs/common'
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
      @Args(new ValidationPipe()) args: PurchaseAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PurchaseReadAction)
   async countPurchase(@Args(new ValidationPipe()) args: PurchaseCountArgs) {
      return handleResolver(this.purchase, 'count', args)
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(PurchaseCreateAction)
   async createPurchase(
      @Args(new ValidationPipe()) args: PurchaseCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'create', { ...args, select })
   }

   @Mutation(() => [Purchase])
   @CheckPoliciesGuard(PurchaseCreateAction)
   async createManyPurchase(
      @Args(new ValidationPipe())
      args: PurchaseCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'createMany', { ...args, select })
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(PurchaseDeleteAction)
   async deletePurchase(
      @Args(new ValidationPipe()) args: PurchaseDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PurchaseDeleteAction)
   async deleteManyPurchase(
      @Args(new ValidationPipe()) args: PurchaseDeleteManyArgs
   ) {
      return handleResolver(this.purchase, 'deleteMany', args)
   }

   @Query(() => Purchase, { nullable: true })
   @CheckPoliciesGuard(PurchaseReadAction)
   async findFirstPurchase(
      @Args(new ValidationPipe()) args: PurchaseFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findFirst', { ...args, select })
   }

   @Query(() => [Purchase])
   @CheckPoliciesGuard(PurchaseReadAction)
   async findManyPurchase(
      @Args(new ValidationPipe()) args: PurchaseFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findMany', { ...args, select })
   }

   @Query(() => Purchase, { nullable: true })
   @CheckPoliciesGuard(PurchaseReadAction)
   async findUniquePurchase(
      @Args(new ValidationPipe()) args: PurchaseFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'findUnique', { ...args, select })
   }

   @Query(() => PurchaseGroupBy)
   @CheckPoliciesGuard(PurchaseReadAction)
   async groupByPurchase(
      @Args(new ValidationPipe()) args: PurchaseGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'groupBy', { ...args, select })
   }

   @Mutation(() => Purchase)
   @CheckPoliciesGuard(PurchaseUpdateAction)
   async updatePurchase(
      @Args(new ValidationPipe()) args: PurchaseUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.purchase, 'update', { ...args, select })
   }
}
