import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Passage,
   PassageAggregateArgs,
   PassageGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   PassageCreateAction,
   PassageDeleteAction,
   PassageReadAction,
   PassageUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   PassageCountArgs,
   PassageCreateArgs,
   PassageCreateManyArgs,
   PassageDeleteArgs,
   PassageDeleteManyArgs,
   PassageFindFirstArgs,
   PassageFindManyArgs,
   PassageFindUniqueArgs,
   PassageUpdateArgs,
   Response,
} from '../../typedefs'
import { PassageService } from './passage.service'

@Resolver(() => Passage)
export class PassageResolver {
   constructor(private readonly passage: PassageService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(PassageReadAction)
   async aggregatePassage(
      @Args(new ValidationPipe()) args: PassageAggregateArgs
   ) {
      return handleResolver(this.passage, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PassageReadAction)
   async countPassage(@Args(new ValidationPipe()) args: PassageCountArgs) {
      return handleResolver(this.passage, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PassageCreateAction)
   async createPassage(@Args(new ValidationPipe()) args: PassageCreateArgs) {
      return handleResolver(this.passage, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PassageCreateAction)
   async createManyPassage(
      @Args(new ValidationPipe()) args: PassageCreateManyArgs
   ) {
      return handleResolver(this.passage, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PassageDeleteAction)
   async deletePassage(@Args(new ValidationPipe()) args: PassageDeleteArgs) {
      return handleResolver(this.passage, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PassageDeleteAction)
   async deleteManyPassage(
      @Args(new ValidationPipe()) args: PassageDeleteManyArgs
   ) {
      return handleResolver(this.passage, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PassageReadAction)
   async findFirstPassage(
      @Args(new ValidationPipe()) args: PassageFindFirstArgs
   ) {
      return handleResolver(this.passage, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PassageReadAction)
   async findManyPassage(
      @Args(new ValidationPipe()) args: PassageFindManyArgs
   ) {
      return handleResolver(this.passage, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PassageReadAction)
   async findUniquePassage(
      @Args(new ValidationPipe()) args: PassageFindUniqueArgs
   ) {
      return handleResolver(this.passage, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PassageReadAction)
   async groupByPassage(@Args(new ValidationPipe()) args: PassageGroupByArgs) {
      return handleResolver(this.passage, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PassageUpdateAction)
   async updatePassage(@Args(new ValidationPipe()) args: PassageUpdateArgs) {
      return handleResolver(this.passage, 'update', args)
   }
}
