import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Person,
   PersonAggregateArgs,
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
   PersonCountArgs,
   PersonCreateArgs,
   PersonCreateManyArgs,
   PersonDeleteArgs,
   PersonDeleteManyArgs,
   PersonFindFirstArgs,
   PersonFindManyArgs,
   PersonFindUniqueArgs,
   PersonUpdateArgs,
   Response,
} from '../../typedefs'
import { PersonService } from './person.service'

@Resolver(() => Person)
export class PersonResolver {
   constructor(private readonly person: PersonService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(PersonReadAction)
   async aggregatePerson(
      @Args(new ValidationPipe()) args: PersonAggregateArgs
   ) {
      return handleResolver(this.person, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PersonReadAction)
   async countPerson(@Args(new ValidationPipe()) args: PersonCountArgs) {
      return handleResolver(this.person, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PersonCreateAction)
   async createPerson(@Args(new ValidationPipe()) args: PersonCreateArgs) {
      return handleResolver(this.person, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PersonCreateAction)
   async createManyPerson(
      @Args(new ValidationPipe()) args: PersonCreateManyArgs
   ) {
      return handleResolver(this.person, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PersonDeleteAction)
   async deletePerson(@Args(new ValidationPipe()) args: PersonDeleteArgs) {
      return handleResolver(this.person, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PersonDeleteAction)
   async deleteManyPerson(
      @Args(new ValidationPipe()) args: PersonDeleteManyArgs
   ) {
      return handleResolver(this.person, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PersonReadAction)
   async findFirstPerson(
      @Args(new ValidationPipe()) args: PersonFindFirstArgs
   ) {
      return handleResolver(this.person, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PersonReadAction)
   async findManyPerson(@Args(new ValidationPipe()) args: PersonFindManyArgs) {
      return handleResolver(this.person, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PersonReadAction)
   async findUniquePerson(
      @Args(new ValidationPipe()) args: PersonFindUniqueArgs
   ) {
      return handleResolver(this.person, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(PersonReadAction)
   async groupByPerson(@Args(new ValidationPipe()) args: PersonGroupByArgs) {
      return handleResolver(this.person, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(PersonUpdateAction)
   async updatePerson(@Args(new ValidationPipe()) args: PersonUpdateArgs) {
      return handleResolver(this.person, 'update', args)
   }
}
