import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateImage,
   Image,
   ImageAggregateArgs,
   ImageGroupBy,
   ImageGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   ImageCreateAction,
   ImageDeleteAction,
   ImageReadAction,
   ImageUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   ImageCountArgs,
   ImageCreateArgs,
   ImageCreateManyArgs,
   ImageDeleteArgs,
   ImageDeleteManyArgs,
   ImageFindFirstArgs,
   ImageFindManyArgs,
   ImageFindUniqueArgs,
   ImageUpdateArgs,
} from '../../typedefs'
import { ImageService } from './image.service'

@Resolver(() => Image)
export class ImageResolver {
   constructor(private readonly image: ImageService) {}

   @Query(() => AggregateImage)
   @CheckPoliciesGuard(ImageReadAction)
   async aggregateImage(
      @Args() args: ImageAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ImageReadAction)
   async countImage(@Args() args: ImageCountArgs) {
      return handleResolver(this.image, 'count', args)
   }

   @Mutation(() => Image)
   @CheckPoliciesGuard(ImageCreateAction)
   async createImage(
      @Args() args: ImageCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'create', { ...args, select })
   }

   @Mutation(() => [Image])
   @CheckPoliciesGuard(ImageCreateAction)
   async createManyImage(
      @Args() args: ImageCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'createMany', { ...args, select })
   }

   @Mutation(() => Image)
   @CheckPoliciesGuard(ImageDeleteAction)
   async deleteImage(
      @Args() args: ImageDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ImageDeleteAction)
   async deleteManyImage(@Args() args: ImageDeleteManyArgs) {
      return handleResolver(this.image, 'deleteMany', args)
   }

   @Query(() => Image, { nullable: true })
   @CheckPoliciesGuard(ImageReadAction)
   async findFirstImage(
      @Args() args: ImageFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'findFirst', { ...args, select })
   }

   @Query(() => [Image])
   @CheckPoliciesGuard(ImageReadAction)
   async findManyImage(
      @Args() args: ImageFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'findMany', { ...args, select })
   }

   @Query(() => Image, { nullable: true })
   @CheckPoliciesGuard(ImageReadAction)
   async findUniqueImage(
      @Args() args: ImageFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'findUnique', { ...args, select })
   }

   @Query(() => ImageGroupBy)
   @CheckPoliciesGuard(ImageReadAction)
   async groupByImage(
      @Args() args: ImageGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'groupBy', { ...args, select })
   }

   @Mutation(() => Image)
   @CheckPoliciesGuard(ImageUpdateAction)
   async updateImage(
      @Args() args: ImageUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'update', { ...args, select })
   }
}
