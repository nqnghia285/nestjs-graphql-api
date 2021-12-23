import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregatePassage,
   Passage,
   PassageAggregateArgs,
   PassageGroupBy,
   PassageGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   PassageCreateAction,
   PassageDeleteAction,
   PassageReadAction,
   PassageUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PassageCountArgs,
   PassageCreateArgs,
   PassageCreateManyArgs,
   PassageDeleteArgs,
   PassageDeleteManyArgs,
   PassageFindFirstArgs,
   PassageFindManyArgs,
   PassageFindUniqueArgs,
   PassageUpdateArgs,
} from '../../typedefs'
import { PassageService } from './passage.service'

@Resolver(() => Passage)
export class PassageResolver {
   constructor(private readonly passage: PassageService) {}

   @Query(() => AggregatePassage)
   @CheckPoliciesGuard(PassageReadAction)
   async aggregatePassage(
      @Args() args: PassageAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PassageReadAction)
   async countPassage(@Args() args: PassageCountArgs) {
      return handleResolver(this.passage, 'count', args)
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(PassageCreateAction)
   async createPassage(
      @Args() args: PassageCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'create', { ...args, select })
   }

   @Mutation(() => [Passage])
   @CheckPoliciesGuard(PassageCreateAction)
   async createManyPassage(
      @Args()
      args: PassageCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'createMany', { ...args, select })
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(PassageDeleteAction)
   async deletePassage(
      @Args() args: PassageDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PassageDeleteAction)
   async deleteManyPassage(@Args() args: PassageDeleteManyArgs) {
      return handleResolver(this.passage, 'deleteMany', args)
   }

   @Query(() => Passage, { nullable: true })
   @CheckPoliciesGuard(PassageReadAction)
   async findFirstPassage(
      @Args() args: PassageFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'findFirst', { ...args, select })
   }

   @Query(() => [Passage])
   @CheckPoliciesGuard(PassageReadAction)
   async findManyPassage(
      @Args() args: PassageFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'findMany', { ...args, select })
   }

   @Query(() => Passage, { nullable: true })
   @CheckPoliciesGuard(PassageReadAction)
   async findUniquePassage(
      @Args() args: PassageFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'findUnique', { ...args, select })
   }

   @Query(() => PassageGroupBy)
   @CheckPoliciesGuard(PassageReadAction)
   async groupByPassage(
      @Args() args: PassageGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'groupBy', { ...args, select })
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(PassageUpdateAction)
   async updatePassage(
      @Args() args: PassageUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'update', { ...args, select })
   }
}
