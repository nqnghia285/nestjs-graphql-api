import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Comment,
   CommentAggregateArgs,
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
   Response,
} from '../../typedefs'
import { CommentService } from './comment.service'

@Resolver(() => Comment)
export class CommentResolver {
   constructor(private readonly comment: CommentService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(CommentReadAction)
   async aggregateComment(
      @Args(new ValidationPipe()) args: CommentAggregateArgs
   ) {
      return handleResolver(this.comment, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CommentReadAction)
   async countComment(@Args(new ValidationPipe()) args: CommentCountArgs) {
      return handleResolver(this.comment, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CommentCreateAction)
   async createComment(@Args(new ValidationPipe()) args: CommentCreateArgs) {
      return handleResolver(this.comment, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CommentCreateAction)
   async createManyComment(
      @Args(new ValidationPipe()) args: CommentCreateManyArgs
   ) {
      return handleResolver(this.comment, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CommentDeleteAction)
   async deleteComment(@Args(new ValidationPipe()) args: CommentDeleteArgs) {
      return handleResolver(this.comment, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CommentDeleteAction)
   async deleteManyComment(
      @Args(new ValidationPipe()) args: CommentDeleteManyArgs
   ) {
      return handleResolver(this.comment, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CommentReadAction)
   async findFirstComment(
      @Args(new ValidationPipe()) args: CommentFindFirstArgs
   ) {
      return handleResolver(this.comment, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CommentReadAction)
   async findManyComment(
      @Args(new ValidationPipe()) args: CommentFindManyArgs
   ) {
      return handleResolver(this.comment, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CommentReadAction)
   async findUniqueComment(
      @Args(new ValidationPipe()) args: CommentFindUniqueArgs
   ) {
      return handleResolver(this.comment, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CommentReadAction)
   async groupByComment(@Args(new ValidationPipe()) args: CommentGroupByArgs) {
      return handleResolver(this.comment, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CommentUpdateAction)
   async updateComment(@Args(new ValidationPipe()) args: CommentUpdateArgs) {
      return handleResolver(this.comment, 'update', args)
   }
}
