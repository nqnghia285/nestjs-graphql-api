import { ValidationPipe } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateComment,
   Comment,
   CommentAggregateArgs,
   CommentGroupBy,
   CommentGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   CommentCreateAction,
   CommentDeleteAction,
   CommentReadAction,
   CommentUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   CommentCountArgs,
   CommentCreateArgs,
   CommentCreateManyArgs,
   CommentDeleteArgs,
   CommentDeleteManyArgs,
   CommentFindFirstArgs,
   CommentFindManyArgs,
   CommentFindUniqueArgs,
   CommentUpdateArgs,
   DeleteMany,
} from '../../typedefs'
import { CommentService } from './comment.service'

@Resolver(() => Comment)
export class CommentResolver {
   constructor(private readonly comment: CommentService) {}

   @Query(() => AggregateComment)
   @CheckPoliciesGuard(CommentReadAction)
   async aggregateComment(
      @Args(new ValidationPipe()) args: CommentAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(CommentReadAction)
   async countComment(@Args(new ValidationPipe()) args: CommentCountArgs) {
      return handleResolver(this.comment, 'count', args)
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(CommentCreateAction)
   async createComment(
      @Args(new ValidationPipe()) args: CommentCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'create', { ...args, select })
   }

   @Mutation(() => [Comment])
   @CheckPoliciesGuard(CommentCreateAction)
   async createManyComment(
      @Args(new ValidationPipe())
      args: CommentCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'createMany', { ...args, select })
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(CommentDeleteAction)
   async deleteComment(
      @Args(new ValidationPipe()) args: CommentDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(CommentDeleteAction)
   async deleteManyComment(
      @Args(new ValidationPipe()) args: CommentDeleteManyArgs
   ) {
      return handleResolver(this.comment, 'deleteMany', args)
   }

   @Query(() => Comment, { nullable: true })
   @CheckPoliciesGuard(CommentReadAction)
   async findFirstComment(
      @Args(new ValidationPipe()) args: CommentFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findFirst', { ...args, select })
   }

   @Query(() => [Comment])
   @CheckPoliciesGuard(CommentReadAction)
   async findManyComment(
      @Args(new ValidationPipe()) args: CommentFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findMany', { ...args, select })
   }

   @Query(() => Comment, { nullable: true })
   @CheckPoliciesGuard(CommentReadAction)
   async findUniqueComment(
      @Args(new ValidationPipe()) args: CommentFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findUnique', { ...args, select })
   }

   @Query(() => CommentGroupBy)
   @CheckPoliciesGuard(CommentReadAction)
   async groupByComment(
      @Args(new ValidationPipe()) args: CommentGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'groupBy', { ...args, select })
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(CommentUpdateAction)
   async updateComment(
      @Args(new ValidationPipe()) args: CommentUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'update', { ...args, select })
   }
}
