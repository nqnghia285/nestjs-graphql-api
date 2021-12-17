import { ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CheckPoliciesGuard } from '~/decorators'
import {
   Laptop,
   LaptopAggregateArgs,
   LaptopGroupByArgs,
} from '~/generated/prisma-nestjs-graphql'
import {
   LaptopCreateAction,
   LaptopDeleteAction,
   LaptopReadAction,
   LaptopUpdateAction,
} from '~/guards'
import { handleResolver } from '~/handlers'
import {
   LaptopCountArgs,
   LaptopCreateArgs,
   LaptopCreateManyArgs,
   LaptopDeleteArgs,
   LaptopDeleteManyArgs,
   LaptopFindFirstArgs,
   LaptopFindManyArgs,
   LaptopFindUniqueArgs,
   LaptopUpdateArgs,
   Response,
} from '../../typedefs'
import { LaptopService } from './laptop.service'

@Resolver(() => Laptop)
export class LaptopResolver {
   constructor(private readonly laptop: LaptopService) {}

   @Query(() => Response)
   @CheckPoliciesGuard(LaptopReadAction)
   async aggregateLaptop(
      @Args(new ValidationPipe()) args: LaptopAggregateArgs
   ) {
      return handleResolver(this.laptop, 'aggregate', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(LaptopReadAction)
   async countLaptop(@Args(new ValidationPipe()) args: LaptopCountArgs) {
      return handleResolver(this.laptop, 'count', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(LaptopCreateAction)
   async createLaptop(@Args(new ValidationPipe()) args: LaptopCreateArgs) {
      return handleResolver(this.laptop, 'create', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(LaptopCreateAction)
   async createManyLaptop(
      @Args(new ValidationPipe()) args: LaptopCreateManyArgs
   ) {
      return handleResolver(this.laptop, 'createMany', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(LaptopDeleteAction)
   async deleteLaptop(@Args(new ValidationPipe()) args: LaptopDeleteArgs) {
      return handleResolver(this.laptop, 'delete', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(LaptopDeleteAction)
   async deleteManyLaptop(
      @Args(new ValidationPipe()) args: LaptopDeleteManyArgs
   ) {
      return handleResolver(this.laptop, 'deleteMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(LaptopReadAction)
   async findFirstLaptop(
      @Args(new ValidationPipe()) args: LaptopFindFirstArgs
   ) {
      return handleResolver(this.laptop, 'findFirst', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(LaptopReadAction)
   async findManyLaptop(@Args(new ValidationPipe()) args: LaptopFindManyArgs) {
      return handleResolver(this.laptop, 'findMany', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(LaptopReadAction)
   async findUniqueLaptop(
      @Args(new ValidationPipe()) args: LaptopFindUniqueArgs
   ) {
      return handleResolver(this.laptop, 'findUnique', args)
   }

   @Query(() => Response)
   @CheckPoliciesGuard(LaptopReadAction)
   async groupByLaptop(@Args(new ValidationPipe()) args: LaptopGroupByArgs) {
      return handleResolver(this.laptop, 'groupBy', args)
   }

   @Mutation(() => Response)
   @CheckPoliciesGuard(LaptopUpdateAction)
   async updateLaptop(@Args(new ValidationPipe()) args: LaptopUpdateArgs) {
      return handleResolver(this.laptop, 'update', args)
   }
}
