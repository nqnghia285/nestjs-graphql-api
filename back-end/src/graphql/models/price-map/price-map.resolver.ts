import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   PriceMap,
   PriceMapAggregateArgs,
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
   PriceMapCountArgs,
   PriceMapCreateArgs,
   PriceMapCreateManyArgs,
   PriceMapDeleteArgs,
   PriceMapDeleteManyArgs,
   PriceMapFindFirstArgs,
   PriceMapFindManyArgs,
   PriceMapFindUniqueArgs,
   PriceMapUpdateArgs,
   Response,
} from '../../typedefs'
import { PriceMapService } from './price-map.service'

@Resolver(() => PriceMap)
export class PriceMapResolver {
   constructor(private readonly priceMap: PriceMapService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(PriceMapReadAction)
   async aggregatePriceMap(
      @Args(new ValidationPipe()) args: PriceMapAggregateArgs
   ) {
      return handleResolver(this.priceMap, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PriceMapReadAction)
   async countPriceMap(@Args(new ValidationPipe()) args: PriceMapCountArgs) {
      return handleResolver(this.priceMap, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PriceMapCreateAction)
   async createPriceMap(@Args(new ValidationPipe()) args: PriceMapCreateArgs) {
      return handleResolver(this.priceMap, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PriceMapCreateAction)
   async createManyPriceMap(
      @Args(new ValidationPipe()) args: PriceMapCreateManyArgs
   ) {
      return handleResolver(this.priceMap, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PriceMapDeleteAction)
   async deletePriceMap(@Args(new ValidationPipe()) args: PriceMapDeleteArgs) {
      return handleResolver(this.priceMap, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PriceMapDeleteAction)
   async deleteManyPriceMap(
      @Args(new ValidationPipe()) args: PriceMapDeleteManyArgs
   ) {
      return handleResolver(this.priceMap, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PriceMapReadAction)
   async findFirstPriceMap(
      @Args(new ValidationPipe()) args: PriceMapFindFirstArgs
   ) {
      return handleResolver(this.priceMap, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PriceMapReadAction)
   async findManyPriceMap(
      @Args(new ValidationPipe()) args: PriceMapFindManyArgs
   ) {
      return handleResolver(this.priceMap, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PriceMapReadAction)
   async findUniquePriceMap(
      @Args(new ValidationPipe()) args: PriceMapFindUniqueArgs
   ) {
      return handleResolver(this.priceMap, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PriceMapReadAction)
   async groupByPriceMap(
      @Args(new ValidationPipe()) args: PriceMapGroupByArgs
   ) {
      return handleResolver(this.priceMap, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PriceMapUpdateAction)
   async updatePriceMap(@Args(new ValidationPipe()) args: PriceMapUpdateArgs) {
      return handleResolver(this.priceMap, 'update', args)
   }
}
