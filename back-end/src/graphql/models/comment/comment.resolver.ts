import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateComment,
   Comment,
   CommentAggregateArgs,
   CommentGroupBy,
   CommentGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   CommentCountArgs,
   CommentCreateArgs,
   CommentCreateManyArgs,
   CommentDeleteArgs,
   CommentDeleteManyArgs,
   CommentFindFirstArgs,
   CommentFindManyArgs,
   CommentFindUniqueArgs,
   CommentUpdateArgs,
} from '../../typedefs'
import { CommentService } from './comment.service'

@Resolver(() => Comment)
export class CommentResolver {
   constructor(private readonly comment: CommentService) {}

   @Query(() => AggregateComment)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Comment'))
   async aggregateComment(
      @Args() args: CommentAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Comment'))
   async countComment(@Args() args: CommentCountArgs) {
      return handleResolver(this.comment, 'count', args)
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Comment'))
   async createComment(
      @Args() args: CommentCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'create', { ...args, select })
   }

   @Mutation(() => [Comment])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Comment'))
   async createManyComment(
      @Args()
      args: CommentCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'createMany', { ...args, select })
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Comment'))
   async deleteComment(
      @Args() args: CommentDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Comment'))
   async deleteManyComment(@Args() args: CommentDeleteManyArgs) {
      return handleResolver(this.comment, 'deleteMany', args)
   }

   @Query(() => Comment, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Comment'))
   async findFirstComment(
      @Args() args: CommentFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findFirst', { ...args, select })
   }

   @Query(() => [Comment])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Comment'))
   async findManyComment(
      @Args() args: CommentFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findMany', { ...args, select })
   }

   @Query(() => Comment, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Comment'))
   async findUniqueComment(
      @Args() args: CommentFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findUnique', { ...args, select })
   }

   @Query(() => CommentGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Comment'))
   async groupByComment(
      @Args() args: CommentGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'groupBy', { ...args, select })
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Comment'))
   async updateComment(
      @Args() args: CommentUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'update', { ...args, select })
   }
}
