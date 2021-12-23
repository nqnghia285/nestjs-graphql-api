import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard, SelectedFields } from '~/decorators'
import {
   AggregateCustomer,
   Customer,
   CustomerAggregateArgs,
   CustomerGroupBy,
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
   DeleteMany,
} from '../../typedefs'
import { CustomerService } from './customer.service'

@Resolver(() => Customer)
export class CustomerResolver {
   constructor(private readonly customer: CustomerService) {}

   @Query(() => AggregateCustomer)
   @CheckPoliciesGuard(CustomerReadAction)
   async aggregateCustomer(
      @Args() args: CustomerAggregateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'aggregate', { ...args, select })
   }

   @Query(() => Int)
   @CheckPoliciesGuard(CustomerReadAction)
   async countCustomer(@Args() args: CustomerCountArgs) {
      return handleResolver(this.customer, 'count', args)
   }

   @Mutation(() => Customer)
   @CheckPoliciesGuard(CustomerCreateAction)
   async createCustomer(
      @Args() args: CustomerCreateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'create', { ...args, select })
   }

   @Mutation(() => [Customer])
   @CheckPoliciesGuard(CustomerCreateAction)
   async createManyCustomer(
      @Args()
      args: CustomerCreateManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'createMany', { ...args, select })
   }

   @Mutation(() => Customer)
   @CheckPoliciesGuard(CustomerDeleteAction)
   async deleteCustomer(
      @Args() args: CustomerDeleteArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'delete', { ...args, select })
   }

   @Mutation(() => DeleteMany)
   @CheckPoliciesGuard(CustomerDeleteAction)
   async deleteManyCustomer(@Args() args: CustomerDeleteManyArgs) {
      return handleResolver(this.customer, 'deleteMany', args)
   }

   @Query(() => Customer, { nullable: true })
   @CheckPoliciesGuard(CustomerReadAction)
   async findFirstCustomer(
      @Args() args: CustomerFindFirstArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'findFirst', { ...args, select })
   }

   @Query(() => [Customer])
   @CheckPoliciesGuard(CustomerReadAction)
   async findManyCustomer(
      @Args() args: CustomerFindManyArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'findMany', { ...args, select })
   }

   @Query(() => Customer, { nullable: true })
   @CheckPoliciesGuard(CustomerReadAction)
   async findUniqueCustomer(
      @Args() args: CustomerFindUniqueArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'findUnique', { ...args, select })
   }

   @Query(() => CustomerGroupBy)
   @CheckPoliciesGuard(CustomerReadAction)
   async groupByCustomer(
      @Args() args: CustomerGroupByArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'groupBy', { ...args, select })
   }

   @Mutation(() => Customer)
   @CheckPoliciesGuard(CustomerUpdateAction)
   async updateCustomer(
      @Args() args: CustomerUpdateArgs,
      @SelectedFields() select: any
   ) {
      return handleResolver(this.customer, 'update', { ...args, select })
   }
}
