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
      @Args() args: CommentAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(CommentReadAction)
   async countComment(@Args() args: CommentCountArgs) {
      return handleResolver(this.comment, 'count', args)
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(CommentCreateAction)
   async createComment(
      @Args() args: CommentCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'create', { ...args, select })
   }

   @Mutation(() => [Comment])
   @CheckPoliciesGuard(CommentCreateAction)
   async createManyComment(
      @Args()
      args: CommentCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'createMany', { ...args, select })
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(CommentDeleteAction)
   async deleteComment(
      @Args() args: CommentDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(CommentDeleteAction)
   async deleteManyComment(@Args() args: CommentDeleteManyArgs) {
      return handleResolver(this.comment, 'deleteMany', args)
   }

   @Query(() => Comment, { nullable: true })
   @CheckPoliciesGuard(CommentReadAction)
   async findFirstComment(
      @Args() args: CommentFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findFirst', { ...args, select })
   }

   @Query(() => [Comment])
   @CheckPoliciesGuard(CommentReadAction)
   async findManyComment(
      @Args() args: CommentFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findMany', { ...args, select })
   }

   @Query(() => Comment, { nullable: true })
   @CheckPoliciesGuard(CommentReadAction)
   async findUniqueComment(
      @Args() args: CommentFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'findUnique', { ...args, select })
   }

   @Query(() => CommentGroupBy)
   @CheckPoliciesGuard(CommentReadAction)
   async groupByComment(
      @Args() args: CommentGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'groupBy', { ...args, select })
   }

   @Mutation(() => Comment)
   @CheckPoliciesGuard(CommentUpdateAction)
   async updateComment(
      @Args() args: CommentUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.comment, 'update', { ...args, select })
   }
}
