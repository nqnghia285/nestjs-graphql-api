import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateImage,
   Image,
   ImageAggregateArgs,
   ImageGroupBy,
   ImageGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import { ActionCreator } from '~/guards'
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
   @CheckPoliciesGuard(ActionCreator('AGGREGATE', 'Image'))
   async aggregateImage(
      @Args() args: ImageAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(ActionCreator('COUNT', 'Image'))
   async countImage(@Args() args: ImageCountArgs) {
      return handleResolver(this.image, 'count', args)
   }

   @Mutation(() => Image)
   @CheckPoliciesGuard(ActionCreator('CREATE', 'Image'))
   async createImage(
      @Args() args: ImageCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'create', { ...args, select })
   }

   @Mutation(() => [Image])
   @CheckPoliciesGuard(ActionCreator('CREATE_MANY', 'Image'))
   async createManyImage(
      @Args()
      args: ImageCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'createMany', { ...args, select })
   }

   @Mutation(() => Image)
   @CheckPoliciesGuard(ActionCreator('DELETE', 'Image'))
   async deleteImage(
      @Args() args: ImageDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(ActionCreator('DELETE_MANY', 'Image'))
   async deleteManyImage(@Args() args: ImageDeleteManyArgs) {
      return handleResolver(this.image, 'deleteMany', args)
   }

   @Query(() => Image, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_FIRST', 'Image'))
   async findFirstImage(
      @Args() args: ImageFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'findFirst', { ...args, select })
   }

   @Query(() => [Image])
   @CheckPoliciesGuard(ActionCreator('FIND_MANY', 'Image'))
   async findManyImage(
      @Args() args: ImageFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'findMany', { ...args, select })
   }

   @Query(() => Image, { nullable: true })
   @CheckPoliciesGuard(ActionCreator('FIND_UNIQUE', 'Image'))
   async findUniqueImage(
      @Args() args: ImageFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'findUnique', { ...args, select })
   }

   @Query(() => ImageGroupBy)
   @CheckPoliciesGuard(ActionCreator('GROUP_BY', 'Image'))
   async groupByImage(
      @Args() args: ImageGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'groupBy', { ...args, select })
   }

   @Mutation(() => Image)
   @CheckPoliciesGuard(ActionCreator('UPDATE', 'Image'))
   async updateImage(
      @Args() args: ImageUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.image, 'update', { ...args, select })
   }
}
