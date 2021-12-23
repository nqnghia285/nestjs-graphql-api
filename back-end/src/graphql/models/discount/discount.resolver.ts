import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateDiscount,
   Discount,
   DiscountAggregateArgs,
   DiscountGroupBy,
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
   DeleteMany,
   DiscountCountArgs,
   DiscountCreateArgs,
   DiscountCreateManyArgs,
   DiscountDeleteArgs,
   DiscountDeleteManyArgs,
   DiscountFindFirstArgs,
   DiscountFindManyArgs,
   DiscountFindUniqueArgs,
   DiscountUpdateArgs,
} from '../../typedefs'
import { DiscountService } from './discount.service'

@Resolver(() => Discount)
export class DiscountResolver {
   constructor(private readonly discount: DiscountService) {}

   @Query(() => AggregateDiscount)
   @CheckPoliciesGuard(DiscountReadAction)
   async aggregateDiscount(
      @Args() args: DiscountAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(DiscountReadAction)
   async countDiscount(@Args() args: DiscountCountArgs) {
      return handleResolver(this.discount, 'count', args)
   }

   @Mutation(() => Discount)
   @CheckPoliciesGuard(DiscountCreateAction)
   async createDiscount(
      @Args() args: DiscountCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'create', { ...args, select })
   }

   @Mutation(() => [Discount])
   @CheckPoliciesGuard(DiscountCreateAction)
   async createManyDiscount(
      @Args()
      args: DiscountCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'createMany', { ...args, select })
   }

   @Mutation(() => Discount)
   @CheckPoliciesGuard(DiscountDeleteAction)
   async deleteDiscount(
      @Args() args: DiscountDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(DiscountDeleteAction)
   async deleteManyDiscount(@Args() args: DiscountDeleteManyArgs) {
      return handleResolver(this.discount, 'deleteMany', args)
   }

   @Query(() => Discount, { nullable: true })
   @CheckPoliciesGuard(DiscountReadAction)
   async findFirstDiscount(
      @Args() args: DiscountFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'findFirst', { ...args, select })
   }

   @Query(() => [Discount])
   @CheckPoliciesGuard(DiscountReadAction)
   async findManyDiscount(
      @Args() args: DiscountFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'findMany', { ...args, select })
   }

   @Query(() => Discount, { nullable: true })
   @CheckPoliciesGuard(DiscountReadAction)
   async findUniqueDiscount(
      @Args() args: DiscountFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'findUnique', { ...args, select })
   }

   @Query(() => DiscountGroupBy)
   @CheckPoliciesGuard(DiscountReadAction)
   async groupByDiscount(
      @Args() args: DiscountGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'groupBy', { ...args, select })
   }

   @Mutation(() => Discount)
   @CheckPoliciesGuard(DiscountUpdateAction)
   async updateDiscount(
      @Args() args: DiscountUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.discount, 'update', { ...args, select })
   }
}
