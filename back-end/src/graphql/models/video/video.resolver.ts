import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateVideo,
   Video,
   VideoAggregateArgs,
   VideoGroupBy,
   VideoGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   VideoCreateAction,
   VideoDeleteAction,
   VideoReadAction,
   VideoUpdateAction,
} from '~/guards'
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
   @CheckPoliciesGuard(VideoReadAction)
   async aggregateVideo(
      @Args() args: VideoAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(VideoReadAction)
   async countVideo(@Args() args: VideoCountArgs) {
      return handleResolver(this.video, 'count', args)
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(VideoCreateAction)
   async createVideo(
      @Args() args: VideoCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'create', { ...args, select })
   }

   @Mutation(() => [Video])
   @CheckPoliciesGuard(VideoCreateAction)
   async createManyVideo(
      @Args()
      args: VideoCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'createMany', { ...args, select })
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(VideoDeleteAction)
   async deleteVideo(
      @Args() args: VideoDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(VideoDeleteAction)
   async deleteManyVideo(@Args() args: VideoDeleteManyArgs) {
      return handleResolver(this.video, 'deleteMany', args)
   }

   @Query(() => Video, { nullable: true })
   @CheckPoliciesGuard(VideoReadAction)
   async findFirstVideo(
      @Args() args: VideoFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'findFirst', { ...args, select })
   }

   @Query(() => [Video])
   @CheckPoliciesGuard(VideoReadAction)
   async findManyVideo(
      @Args() args: VideoFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'findMany', { ...args, select })
   }

   @Query(() => Video, { nullable: true })
   @CheckPoliciesGuard(VideoReadAction)
   async findUniqueVideo(
      @Args() args: VideoFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'findUnique', { ...args, select })
   }

   @Query(() => VideoGroupBy)
   @CheckPoliciesGuard(VideoReadAction)
   async groupByVideo(
      @Args() args: VideoGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'groupBy', { ...args, select })
   }

   @Mutation(() => Video)
   @CheckPoliciesGuard(VideoUpdateAction)
   async updateVideo(
      @Args() args: VideoUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.video, 'update', { ...args, select })
   }
}
