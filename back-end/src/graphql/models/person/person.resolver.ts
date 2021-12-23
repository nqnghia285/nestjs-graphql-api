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
      @Args() args: PersonAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(PersonReadAction)
   async countPerson(@Args() args: PersonCountArgs) {
      return handleResolver(this.person, 'count', args)
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(PersonCreateAction)
   async createPerson(
      @Args() args: PersonCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'create', { ...args, select })
   }

   @Mutation(() => [Person])
   @CheckPoliciesGuard(PersonCreateAction)
   async createManyPerson(
      @Args()
      args: PersonCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'createMany', { ...args, select })
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(PersonDeleteAction)
   async deletePerson(
      @Args() args: PersonDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(PersonDeleteAction)
   async deleteManyPerson(@Args() args: PersonDeleteManyArgs) {
      return handleResolver(this.person, 'deleteMany', args)
   }

   @Query(() => Person, { nullable: true })
   @CheckPoliciesGuard(PersonReadAction)
   async findFirstPerson(
      @Args() args: PersonFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'findFirst', { ...args, select })
   }

   @Query(() => [Person])
   @CheckPoliciesGuard(PersonReadAction)
   async findManyPerson(
      @Args() args: PersonFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'findMany', { ...args, select })
   }

   @Query(() => Person, { nullable: true })
   @CheckPoliciesGuard(PersonReadAction)
   async findUniquePerson(
      @Args() args: PersonFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'findUnique', { ...args, select })
   }

   @Query(() => PersonGroupBy)
   @CheckPoliciesGuard(PersonReadAction)
   async groupByPerson(
      @Args() args: PersonGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'groupBy', { ...args, select })
   }

   @Mutation(() => Person)
   @CheckPoliciesGuard(PersonUpdateAction)
   async updatePerson(
      @Args() args: PersonUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.person, 'update', { ...args, select })
   }
}
