import { ValidationPipe } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateUser,
   User,
   UserAggregateArgs,
   UserGroupBy,
   UserGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   UserCreateAction,
   UserDeleteAction,
   UserReadAction,
   UserUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import { UserCreateArgsPipe, UserCreateManyArgsPipe } from '~/pipes'
import {
   DeleteMany,
   UserCountArgs,
   UserCreateArgs,
   UserCreateManyArgs,
   UserDeleteArgs,
   UserDeleteManyArgs,
   UserFindFirstArgs,
   UserFindManyArgs,
   UserFindUniqueArgs,
   UserUpdateArgs,
} from '../../typedefs'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
   constructor(private readonly user: UserService) {}

   @Query(() => AggregateUser)
   @CheckPoliciesGuard(UserReadAction)
   async aggregateUser(
      @Args(new ValidationPipe()) args: UserAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(UserReadAction)
   async countUser(@Args(new ValidationPipe()) args: UserCountArgs) {
      return handleResolver(this.user, 'count', args)
   }

   @Mutation(() => User)
   @CheckPoliciesGuard(UserCreateAction)
   async createUser(
      @Args(new ValidationPipe(), UserCreateArgsPipe) args: UserCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'create', { ...args, select })
   }

   @Mutation(() => [User])
   @CheckPoliciesGuard(UserCreateAction)
   async createManyUser(
      @Args(new ValidationPipe(), UserCreateManyArgsPipe)
      args: UserCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'createMany', { ...args, select })
   }

   @Mutation(() => User)
   @CheckPoliciesGuard(UserDeleteAction)
   async deleteUser(
      @Args(new ValidationPipe()) args: UserDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(UserDeleteAction)
   async deleteManyUser(@Args(new ValidationPipe()) args: UserDeleteManyArgs) {
      return handleResolver(this.user, 'deleteMany', args)
   }

   @Query(() => User, { nullable: true })
   @CheckPoliciesGuard(UserReadAction)
   async findFirstUser(
      @Args(new ValidationPipe()) args: UserFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'findFirst', { ...args, select })
   }

   @Query(() => [User])
   @CheckPoliciesGuard(UserReadAction)
   async findManyUser(
      @Args(new ValidationPipe()) args: UserFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'findMany', { ...args, select })
   }

   @Query(() => User, { nullable: true })
   @CheckPoliciesGuard(UserReadAction)
   async findUniqueUser(
      @Args(new ValidationPipe()) args: UserFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'findUnique', { ...args, select })
   }

   @Query(() => UserGroupBy)
   @CheckPoliciesGuard(UserReadAction)
   async groupByUser(
      @Args(new ValidationPipe()) args: UserGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'groupBy', { ...args, select })
   }

   @Mutation(() => User)
   @CheckPoliciesGuard(UserUpdateAction)
   async updateUser(
      @Args(new ValidationPipe()) args: UserUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.user, 'update', { ...args, select })
   }
}
