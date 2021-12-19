import { ValidationPipe } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregatePerson,
   Person,
   PersonAggregateArgs,
   PersonGroupBy,
   PersonGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   PersonCreateAction,
   PersonDeleteAction,
   PersonReadAction,
   PersonUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   DeleteMany,
   PersonCountArgs,
   PersonCreateArgs,
   PersonCreateManyArgs,
   PersonDeleteArgs,
   PersonDeleteManyArgs,
   PersonFindFirstArgs,
   PersonFindManyArgs,
   PersonFindUniqueArgs,
   PersonUpdateArgs,
} from '../../typedefs'
import { PersonService } from './person.service'

@Resolver(() => Person)
export class PersonResolver {
   constructor(private readonly person: PersonService) {}

   @Query(() => AggregatePerson)
   @CheckPoliciesGuard(PersonReadAction)
   async aggregatePerson(
      @Args(new ValidationPipe()) args: PersonAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PersonReadAction)
   async countPerson(@Args(new ValidationPipe()) args: PersonCountArgs) {
      return handleResolver(this.person, 'count', args)
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(PersonCreateAction)
   async createPerson(
      @Args(new ValidationPipe()) args: PersonCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'create', { ...args, select })
   }

   @Mutation(() => [Person])
   @CheckPoliciesGuard(PersonCreateAction)
   async createManyPerson(
      @Args(new ValidationPipe())
      args: PersonCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'createMany', { ...args, select })
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(PersonDeleteAction)
   async deletePerson(
      @Args(new ValidationPipe()) args: PersonDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PersonDeleteAction)
   async deleteManyPerson(
      @Args(new ValidationPipe()) args: PersonDeleteManyArgs
   ) {
      return handleResolver(this.person, 'deleteMany', args)
   }

   @Query(() => Person, { nullable: true })
   @CheckPoliciesGuard(PersonReadAction)
   async findFirstPerson(
      @Args(new ValidationPipe()) args: PersonFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'findFirst', { ...args, select })
   }

   @Query(() => [Person])
   @CheckPoliciesGuard(PersonReadAction)
   async findManyPerson(
      @Args(new ValidationPipe()) args: PersonFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'findMany', { ...args, select })
   }

   @Query(() => Person, { nullable: true })
   @CheckPoliciesGuard(PersonReadAction)
   async findUniquePerson(
      @Args(new ValidationPipe()) args: PersonFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'findUnique', { ...args, select })
   }

   @Query(() => PersonGroupBy)
   @CheckPoliciesGuard(PersonReadAction)
   async groupByPerson(
      @Args(new ValidationPipe()) args: PersonGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'groupBy', { ...args, select })
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(PersonUpdateAction)
   async updatePerson(
      @Args(new ValidationPipe()) args: PersonUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'update', { ...args, select })
   }
}
