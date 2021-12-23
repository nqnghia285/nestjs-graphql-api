import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregatePriceMap,
   PriceMap,
   PriceMapAggregateArgs,
   PriceMapGroupBy,
   PriceMapGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   PriceMapCreateAction,
   PriceMapDeleteAction,
   PriceMapReadAction,
   PriceMapUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PriceMapCountArgs,
   PriceMapCreateArgs,
   PriceMapCreateManyArgs,
   PriceMapDeleteArgs,
   PriceMapDeleteManyArgs,
   PriceMapFindFirstArgs,
   PriceMapFindManyArgs,
   PriceMapFindUniqueArgs,
   PriceMapUpdateArgs,
} from '../../typedefs'
import { PriceMapService } from './price-map.service'

@Resolver(() => PriceMap)
export class PriceMapResolver {
   constructor(private readonly priceMap: PriceMapService) {}

   @Query(() => AggregatePriceMap)
   @CheckPoliciesGuard(PriceMapReadAction)
   async aggregatePriceMap(
      @Args() args: PriceMapAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PriceMapReadAction)
   async countPriceMap(@Args() args: PriceMapCountArgs) {
      return handleResolver(this.priceMap, 'count', args)
   }

   @Mutation(() => PriceMap)
   @CheckPoliciesGuard(PriceMapCreateAction)
   async createPriceMap(
      @Args() args: PriceMapCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'create', { ...args, select })
   }

   @Mutation(() => [PriceMap])
   @CheckPoliciesGuard(PriceMapCreateAction)
   async createManyPriceMap(
      @Args()
      args: PriceMapCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'createMany', { ...args, select })
   }

   @Mutation(() => PriceMap)
   @CheckPoliciesGuard(PriceMapDeleteAction)
   async deletePriceMap(
      @Args() args: PriceMapDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PriceMapDeleteAction)
   async deleteManyPriceMap(@Args() args: PriceMapDeleteManyArgs) {
      return handleResolver(this.priceMap, 'deleteMany', args)
   }

   @Query(() => PriceMap, { nullable: true })
   @CheckPoliciesGuard(PriceMapReadAction)
   async findFirstPriceMap(
      @Args() args: PriceMapFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'findFirst', { ...args, select })
   }

   @Query(() => [PriceMap])
   @CheckPoliciesGuard(PriceMapReadAction)
   async findManyPriceMap(
      @Args() args: PriceMapFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'findMany', { ...args, select })
   }

   @Query(() => PriceMap, { nullable: true })
   @CheckPoliciesGuard(PriceMapReadAction)
   async findUniquePriceMap(
      @Args() args: PriceMapFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'findUnique', { ...args, select })
   }

   @Query(() => PriceMapGroupBy)
   @CheckPoliciesGuard(PriceMapReadAction)
   async groupByPriceMap(
      @Args() args: PriceMapGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'groupBy', { ...args, select })
   }

   @Mutation(() => PriceMap)
   @CheckPoliciesGuard(PriceMapUpdateAction)
   async updatePriceMap(
      @Args() args: PriceMapUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.priceMap, 'update', { ...args, select })
   }
}
