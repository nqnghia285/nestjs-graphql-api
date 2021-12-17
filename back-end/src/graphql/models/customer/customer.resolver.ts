import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Customer,
   CustomerAggregateArgs,
   CustomerGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   CustomerCreateAction,
   CustomerDeleteAction,
   CustomerReadAction,
   CustomerUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   CustomerCountArgs,
   CustomerCreateArgs,
   CustomerCreateManyArgs,
   CustomerDeleteArgs,
   CustomerDeleteManyArgs,
   CustomerFindFirstArgs,
   CustomerFindManyArgs,
   CustomerFindUniqueArgs,
   CustomerUpdateArgs,
   Response,
} from '../../typedefs'
import { CustomerService } from './customer.service'

@Resolver(() => Customer)
export class CustomerResolver {
   constructor(private readonly customer: CustomerService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(CustomerReadAction)
   async aggregateCustomer(
      @Args(new ValidationPipe()) args: CustomerAggregateArgs
   ) {
      return handleResolver(this.customer, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CustomerReadAction)
   async countCustomer(@Args(new ValidationPipe()) args: CustomerCountArgs) {
      return handleResolver(this.customer, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CustomerCreateAction)
   async createCustomer(@Args(new ValidationPipe()) args: CustomerCreateArgs) {
      return handleResolver(this.customer, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CustomerCreateAction)
   async createManyCustomer(
      @Args(new ValidationPipe()) args: CustomerCreateManyArgs
   ) {
      return handleResolver(this.customer, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CustomerDeleteAction)
   async deleteCustomer(@Args(new ValidationPipe()) args: CustomerDeleteArgs) {
      return handleResolver(this.customer, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CustomerDeleteAction)
   async deleteManyCustomer(
      @Args(new ValidationPipe()) args: CustomerDeleteManyArgs
   ) {
      return handleResolver(this.customer, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CustomerReadAction)
   async findFirstCustomer(
      @Args(new ValidationPipe()) args: CustomerFindFirstArgs
   ) {
      return handleResolver(this.customer, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CustomerReadAction)
   async findManyCustomer(
      @Args(new ValidationPipe()) args: CustomerFindManyArgs
   ) {
      return handleResolver(this.customer, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CustomerReadAction)
   async findUniqueCustomer(
      @Args(new ValidationPipe()) args: CustomerFindUniqueArgs
   ) {
      return handleResolver(this.customer, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(CustomerReadAction)
   async groupByCustomer(
      @Args(new ValidationPipe()) args: CustomerGroupByArgs
   ) {
      return handleResolver(this.customer, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(CustomerUpdateAction)
   async updateCustomer(@Args(new ValidationPipe()) args: CustomerUpdateArgs) {
      return handleResolver(this.customer, 'update', args)
   }
}
