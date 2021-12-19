import { ValidationPipe } from '@nestjs/common'
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
      @Args(new ValidationPipe()) args: PassageAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PassageReadAction)
   async countPassage(@Args(new ValidationPipe()) args: PassageCountArgs) {
      return handleResolver(this.passage, 'count', args)
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(PassageCreateAction)
   async createPassage(
      @Args(new ValidationPipe()) args: PassageCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'create', { ...args, select })
   }

   @Mutation(() => [Passage])
   @CheckPoliciesGuard(PassageCreateAction)
   async createManyPassage(
      @Args(new ValidationPipe())
      args: PassageCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'createMany', { ...args, select })
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(PassageDeleteAction)
   async deletePassage(
      @Args(new ValidationPipe()) args: PassageDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PassageDeleteAction)
   async deleteManyPassage(
      @Args(new ValidationPipe()) args: PassageDeleteManyArgs
   ) {
      return handleResolver(this.passage, 'deleteMany', args)
   }

   @Query(() => Passage, { nullable: true })
   @CheckPoliciesGuard(PassageReadAction)
   async findFirstPassage(
      @Args(new ValidationPipe()) args: PassageFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'findFirst', { ...args, select })
   }

   @Query(() => [Passage])
   @CheckPoliciesGuard(PassageReadAction)
   async findManyPassage(
      @Args(new ValidationPipe()) args: PassageFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'findMany', { ...args, select })
   }

   @Query(() => Passage, { nullable: true })
   @CheckPoliciesGuard(PassageReadAction)
   async findUniquePassage(
      @Args(new ValidationPipe()) args: PassageFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'findUnique', { ...args, select })
   }

   @Query(() => PassageGroupBy)
   @CheckPoliciesGuard(PassageReadAction)
   async groupByPassage(
      @Args(new ValidationPipe()) args: PassageGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'groupBy', { ...args, select })
   }

   @Mutation(() => Passage)
   @CheckPoliciesGuard(PassageUpdateAction)
   async updatePassage(
      @Args(new ValidationPipe()) args: PassageUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.passage, 'update', { ...args, select })
   }
}
