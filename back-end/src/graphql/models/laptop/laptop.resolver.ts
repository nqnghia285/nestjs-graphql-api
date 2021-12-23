import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateLaptop,
   Laptop,
   LaptopAggregateArgs,
   LaptopGroupBy,
   LaptopGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   LaptopCreateAction,
   LaptopDeleteAction,
   LaptopReadAction,
   LaptopUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   LaptopCountArgs,
   LaptopCreateArgs,
   LaptopCreateManyArgs,
   LaptopDeleteArgs,
   LaptopDeleteManyArgs,
   LaptopFindFirstArgs,
   LaptopFindManyArgs,
   LaptopFindUniqueArgs,
   LaptopUpdateArgs,
} from '../../typedefs'
import { LaptopService } from './laptop.service'

@Resolver(() => Laptop)
export class LaptopResolver {
   constructor(private readonly laptop: LaptopService) {}

   @Query(() => AggregateLaptop)
   @CheckPoliciesGuard(LaptopReadAction)
   async aggregateLaptop(
      @Args() args: LaptopAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(LaptopReadAction)
   async countLaptop(@Args() args: LaptopCountArgs) {
      return handleResolver(this.laptop, 'count', args)
   }

   @Mutation(() => Laptop)
   @CheckPoliciesGuard(LaptopCreateAction)
   async createLaptop(
      @Args() args: LaptopCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'create', { ...args, select })
   }

   @Mutation(() => [Laptop])
   @CheckPoliciesGuard(LaptopCreateAction)
   async createManyLaptop(
      @Args()
      args: LaptopCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'createMany', { ...args, select })
   }

   @Mutation(() => Laptop)
   @CheckPoliciesGuard(LaptopDeleteAction)
   async deleteLaptop(
      @Args() args: LaptopDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(LaptopDeleteAction)
   async deleteManyLaptop(@Args() args: LaptopDeleteManyArgs) {
      return handleResolver(this.laptop, 'deleteMany', args)
   }

   @Query(() => Laptop, { nullable: true })
   @CheckPoliciesGuard(LaptopReadAction)
   async findFirstLaptop(
      @Args() args: LaptopFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'findFirst', { ...args, select })
   }

   @Query(() => [Laptop])
   @CheckPoliciesGuard(LaptopReadAction)
   async findManyLaptop(
      @Args() args: LaptopFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'findMany', { ...args, select })
   }

   @Query(() => Laptop, { nullable: true })
   @CheckPoliciesGuard(LaptopReadAction)
   async findUniqueLaptop(
      @Args() args: LaptopFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'findUnique', { ...args, select })
   }

   @Query(() => LaptopGroupBy)
   @CheckPoliciesGuard(LaptopReadAction)
   async groupByLaptop(
      @Args() args: LaptopGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'groupBy', { ...args, select })
   }

   @Mutation(() => Laptop)
   @CheckPoliciesGuard(LaptopUpdateAction)
   async updateLaptop(
      @Args() args: LaptopUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.laptop, 'update', { ...args, select })
   }
}
