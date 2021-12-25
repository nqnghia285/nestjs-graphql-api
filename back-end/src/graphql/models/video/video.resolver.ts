import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateVideo,
   Video,
   VideoAggregateArgs,
   VideoGroupBy,
   VideoGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   VideoCountArgs,
   VideoCreateArgs,
   VideoCreateManyArgs,
   VideoDeleteArgs,
   VideoDeleteManyArgs,
   VideoFindFirstArgs,
   VideoFindManyArgs,
   VideoFindUniqueArgs,
   VideoUpdateArgs,
} from '../../typedefs'
import { VideoService } from './video.service'

@Resolver(() => Video)
export class VideoResolver {
   constructor(private readonly video: VideoService) {}

   @Query(() => AggregateVideo)
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Video'))
   async aggregateVideo(
      @Args() args: VideoAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Video'))
   async countVideo(@Args() args: VideoCountArgs) {
      return handleResolver(this.video, 'count', args)
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Video'))
   async createVideo(
      @Args() args: VideoCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'create', { ...args, select })
   }

   @Mutation(() => [Video])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Video'))
   async createManyVideo(
      @Args()
      args: VideoCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'createMany', { ...args, select })
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Video'))
   async deleteVideo(
      @Args() args: VideoDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Video'))
   async deleteManyVideo(@Args() args: VideoDeleteManyArgs) {
      return handleResolver(this.video, 'deleteMany', args)
   }

   @Query(() => Video, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Video'))
   async findFirstVideo(
      @Args() args: VideoFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'findFirst', { ...args, select })
   }

   @Query(() => [Video])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Video'))
   async findManyVideo(
      @Args() args: VideoFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'findMany', { ...args, select })
   }

   @Query(() => Video, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Video'))
   async findUniqueVideo(
      @Args() args: VideoFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'findUnique', { ...args, select })
   }

   @Query(() => VideoGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Video'))
   async groupByVideo(
      @Args() args: VideoGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'groupBy', { ...args, select })
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Video'))
   async updateVideo(
      @Args() args: VideoUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'update', { ...args, select })
   }
}
