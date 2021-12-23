import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregatePost,
   Post,
   PostAggregateArgs,
   PostGroupBy,
   PostGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   PostCreateAction,
   PostDeleteAction,
   PostReadAction,
   PostUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PostCountArgs,
   PostCreateArgs,
   PostCreateManyArgs,
   PostDeleteArgs,
   PostDeleteManyArgs,
   PostFindFirstArgs,
   PostFindManyArgs,
   PostFindUniqueArgs,
   PostUpdateArgs,
} from '../../typedefs'
import { PostService } from './post.service'

@Resolver(() => Post)
export class PostResolver {
   constructor(private readonly post: PostService) {}

   @Query(() => AggregatePost)
   @CheckPoliciesGuard(PostReadAction)
   async aggregatePost(
      @Args() args: PostAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PostReadAction)
   async countPost(@Args() args: PostCountArgs) {
      return handleResolver(this.post, 'count', args)
   }

   @Mutation(() => Post)
   @CheckPoliciesGuard(PostCreateAction)
   async createPost(
      @Args() args: PostCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'create', { ...args, select })
   }

   @Mutation(() => [Post])
   @CheckPoliciesGuard(PostCreateAction)
   async createManyPost(
      @Args()
      args: PostCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'createMany', { ...args, select })
   }

   @Mutation(() => Post)
   @CheckPoliciesGuard(PostDeleteAction)
   async deletePost(
      @Args() args: PostDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PostDeleteAction)
   async deleteManyPost(@Args() args: PostDeleteManyArgs) {
      return handleResolver(this.post, 'deleteMany', args)
   }

   @Query(() => Post, { nullable: true })
   @CheckPoliciesGuard(PostReadAction)
   async findFirstPost(
      @Args() args: PostFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'findFirst', { ...args, select })
   }

   @Query(() => [Post])
   @CheckPoliciesGuard(PostReadAction)
   async findManyPost(
      @Args() args: PostFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'findMany', { ...args, select })
   }

   @Query(() => Post, { nullable: true })
   @CheckPoliciesGuard(PostReadAction)
   async findUniquePost(
      @Args() args: PostFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'findUnique', { ...args, select })
   }

   @Query(() => PostGroupBy)
   @CheckPoliciesGuard(PostReadAction)
   async groupByPost(
      @Args() args: PostGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'groupBy', { ...args, select })
   }

   @Mutation(() => Post)
   @CheckPoliciesGuard(PostUpdateAction)
   async updatePost(
      @Args() args: PostUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.post, 'update', { ...args, select })
   }
}
