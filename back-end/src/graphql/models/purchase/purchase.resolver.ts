import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Purchase,
   PurchaseAggregateArgs,
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
   PurchaseCountArgs,
   PurchaseCreateArgs,
   PurchaseCreateManyArgs,
   PurchaseDeleteArgs,
   PurchaseDeleteManyArgs,
   PurchaseFindFirstArgs,
   PurchaseFindManyArgs,
   PurchaseFindUniqueArgs,
   PurchaseUpdateArgs,
   Response,
} from '../../typedefs'
import { PurchaseService } from './purchase.service'

@Resolver(() => Purchase)
export class PurchaseResolver {
   constructor(private readonly purchase: PurchaseService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(PurchaseReadAction)
   async aggregatePurchase(
      @Args(new ValidationPipe()) args: PurchaseAggregateArgs
   ) {
      return handleResolver(this.purchase, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PurchaseReadAction)
   async countPurchase(@Args(new ValidationPipe()) args: PurchaseCountArgs) {
      return handleResolver(this.purchase, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PurchaseCreateAction)
   async createPurchase(@Args(new ValidationPipe()) args: PurchaseCreateArgs) {
      return handleResolver(this.purchase, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PurchaseCreateAction)
   async createManyPurchase(
      @Args(new ValidationPipe()) args: PurchaseCreateManyArgs
   ) {
      return handleResolver(this.purchase, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PurchaseDeleteAction)
   async deletePurchase(@Args(new ValidationPipe()) args: PurchaseDeleteArgs) {
      return handleResolver(this.purchase, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PurchaseDeleteAction)
   async deleteManyPurchase(
      @Args(new ValidationPipe()) args: PurchaseDeleteManyArgs
   ) {
      return handleResolver(this.purchase, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PurchaseReadAction)
   async findFirstPurchase(
      @Args(new ValidationPipe()) args: PurchaseFindFirstArgs
   ) {
      return handleResolver(this.purchase, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PurchaseReadAction)
   async findManyPurchase(
      @Args(new ValidationPipe()) args: PurchaseFindManyArgs
   ) {
      return handleResolver(this.purchase, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PurchaseReadAction)
   async findUniquePurchase(
      @Args(new ValidationPipe()) args: PurchaseFindUniqueArgs
   ) {
      return handleResolver(this.purchase, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PurchaseReadAction)
   async groupByPurchase(
      @Args(new ValidationPipe()) args: PurchaseGroupByArgs
   ) {
      return handleResolver(this.purchase, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PurchaseUpdateAction)
   async updatePurchase(@Args(new ValidationPipe()) args: PurchaseUpdateArgs) {
      return handleResolver(this.purchase, 'update', args)
   }
}
