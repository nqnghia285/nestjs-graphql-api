import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   User,
   UserAggregateArgs,
   UserGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   UserCreateAction,
   UserDeleteAction,
   UserReadAction,
   UserUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   UserCountArgs,
   UserCreateArgs,
   UserCreateManyArgs,
   UserDeleteArgs,
   UserDeleteManyArgs,
   UserFindFirstArgs,
   UserFindManyArgs,
   UserFindUniqueArgs,
   UserUpdateArgs,
   Response,
} from '../../typedefs'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
   constructor(private readonly user: UserService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(UserReadAction)
   async aggregateUser(@Args(new ValidationPipe()) args: UserAggregateArgs) {
      return handleResolver(this.user, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(UserReadAction)
   async countUser(@Args(new ValidationPipe()) args: UserCountArgs) {
      return handleResolver(this.user, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(UserCreateAction)
   async createUser(@Args(new ValidationPipe()) args: UserCreateArgs) {
      return handleResolver(this.user, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(UserCreateAction)
   async createManyUser(@Args(new ValidationPipe()) args: UserCreateManyArgs) {
      return handleResolver(this.user, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(UserDeleteAction)
   async deleteUser(@Args(new ValidationPipe()) args: UserDeleteArgs) {
      return handleResolver(this.user, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(UserDeleteAction)
   async deleteManyUser(@Args(new ValidationPipe()) args: UserDeleteManyArgs) {
      return handleResolver(this.user, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(UserReadAction)
   async findFirstUser(@Args(new ValidationPipe()) args: UserFindFirstArgs) {
      return handleResolver(this.user, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(UserReadAction)
   async findManyUser(@Args(new ValidationPipe()) args: UserFindManyArgs) {
      return handleResolver(this.user, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(UserReadAction)
   async findUniqueUser(@Args(new ValidationPipe()) args: UserFindUniqueArgs) {
      return handleResolver(this.user, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(UserReadAction)
   async groupByUser(@Args(new ValidationPipe()) args: UserGroupByArgs) {
      return handleResolver(this.user, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(UserUpdateAction)
   async updateUser(@Args(new ValidationPipe()) args: UserUpdateArgs) {
      return handleResolver(this.user, 'update', args)
   }
}
