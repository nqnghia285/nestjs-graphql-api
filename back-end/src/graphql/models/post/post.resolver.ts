import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Post,
   PostAggregateArgs,
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
   PostCountArgs,
   PostCreateArgs,
   PostCreateManyArgs,
   PostDeleteArgs,
   PostDeleteManyArgs,
   PostFindFirstArgs,
   PostFindManyArgs,
   PostFindUniqueArgs,
   PostUpdateArgs,
   Response,
} from '../../typedefs'
import { PostService } from './post.service'

@Resolver(() => Post)
export class PostResolver {
   constructor(private readonly post: PostService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(PostReadAction)
   async aggregatePost(@Args(new ValidationPipe()) args: PostAggregateArgs) {
      return handleResolver(this.post, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PostReadAction)
   async countPost(@Args(new ValidationPipe()) args: PostCountArgs) {
      return handleResolver(this.post, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PostCreateAction)
   async createPost(@Args(new ValidationPipe()) args: PostCreateArgs) {
      return handleResolver(this.post, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PostCreateAction)
   async createManyPost(@Args(new ValidationPipe()) args: PostCreateManyArgs) {
      return handleResolver(this.post, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PostDeleteAction)
   async deletePost(@Args(new ValidationPipe()) args: PostDeleteArgs) {
      return handleResolver(this.post, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PostDeleteAction)
   async deleteManyPost(@Args(new ValidationPipe()) args: PostDeleteManyArgs) {
      return handleResolver(this.post, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PostReadAction)
   async findFirstPost(@Args(new ValidationPipe()) args: PostFindFirstArgs) {
      return handleResolver(this.post, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PostReadAction)
   async findManyPost(@Args(new ValidationPipe()) args: PostFindManyArgs) {
      return handleResolver(this.post, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PostReadAction)
   async findUniquePost(@Args(new ValidationPipe()) args: PostFindUniqueArgs) {
      return handleResolver(this.post, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PostReadAction)
   async groupByPost(@Args(new ValidationPipe()) args: PostGroupByArgs) {
      return handleResolver(this.post, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PostUpdateAction)
   async updatePost(@Args(new ValidationPipe()) args: PostUpdateArgs) {
      return handleResolver(this.post, 'update', args)
   }
}
