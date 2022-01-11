import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal'
import { Laptop } from '~/generated/prisma-nestjs-graphql'
import { LaptopService } from './laptop.service'

@Resolver(() => Laptop)
export class PriceFieldOfLaptopResolver {
   constructor(private readonly laptop: LaptopService) {}

   @ResolveField(() => GraphQLDecimal, { nullable: true })
   async price(@Parent() parent: Laptop) {
      const laptop: Laptop = await this.laptop.findUnique({
         where: { id: parent.id },
         select: {
            discounts: true,
            priceMap: true,
         },
      })

      if (laptop?.priceMap) {
         const arrD = laptop.discounts
            ? laptop.discounts.map((discount) => discount.value)
            : []

         return (laptop.priceMap.price as Prisma.Decimal).mul(
            (100 -
               (arrD.length > 0 ? arrD.reduce((pre, cur) => pre + cur) : 0)) /
               100
         )
      }

      return new Prisma.Decimal(0)
   }
}
