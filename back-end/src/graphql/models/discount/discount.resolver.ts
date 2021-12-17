import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Discount,
   DiscountAggregateArgs,
   DiscountGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   DiscountCreateAction,
   DiscountDeleteAction,
   DiscountReadAction,
   DiscountUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DiscountCountArgs,
   DiscountCreateArgs,
   DiscountCreateManyArgs,
   DiscountDeleteArgs,
   DiscountDeleteManyArgs,
   DiscountFindFirstArgs,
   DiscountFindManyArgs,
   DiscountFindUniqueArgs,
   DiscountUpdateArgs,
   Response,
} from '../../typedefs'
import { DiscountService } from './discount.service'

@Resolver(() => Discount)
export class DiscountResolver {
   constructor(private readonly discount: DiscountService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(DiscountReadAction)
   async aggregateDiscount(
      @Args(new ValidationPipe()) args: DiscountAggregateArgs
   ) {
      return handleResolver(this.discount, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(DiscountReadAction)
   async countDiscount(@Args(new ValidationPipe()) args: DiscountCountArgs) {
      return handleResolver(this.discount, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(DiscountCreateAction)
   async createDiscount(@Args(new ValidationPipe()) args: DiscountCreateArgs) {
      return handleResolver(this.discount, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(DiscountCreateAction)
   async createManyDiscount(
      @Args(new ValidationPipe()) args: DiscountCreateManyArgs
   ) {
      return handleResolver(this.discount, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(DiscountDeleteAction)
   async deleteDiscount(@Args(new ValidationPipe()) args: DiscountDeleteArgs) {
      return handleResolver(this.discount, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(DiscountDeleteAction)
   async deleteManyDiscount(
      @Args(new ValidationPipe()) args: DiscountDeleteManyArgs
   ) {
      return handleResolver(this.discount, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(DiscountReadAction)
   async findFirstDiscount(
      @Args(new ValidationPipe()) args: DiscountFindFirstArgs
   ) {
      return handleResolver(this.discount, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(DiscountReadAction)
   async findManyDiscount(
      @Args(new ValidationPipe()) args: DiscountFindManyArgs
   ) {
      return handleResolver(this.discount, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(DiscountReadAction)
   async findUniqueDiscount(
      @Args(new ValidationPipe()) args: DiscountFindUniqueArgs
   ) {
      return handleResolver(this.discount, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(DiscountReadAction)
   async groupByDiscount(
      @Args(new ValidationPipe()) args: DiscountGroupByArgs
   ) {
      return handleResolver(this.discount, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(DiscountUpdateAction)
   async updateDiscount(@Args(new ValidationPipe()) args: DiscountUpdateArgs) {
      return handleResolver(this.discount, 'update', args)
   }
}
