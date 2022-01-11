import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { Comment, Laptop } from '~/generated/prisma-nestjs-graphql'
import { Rating } from '~/graphql/typedefs'
import { Rating as IRating } from '~/interface'
import { LaptopService } from './laptop.service'

@Resolver(() => Laptop)
export class RatingFieldOfLaptopResolver {
   constructor(private readonly laptop: LaptopService) {}

   @ResolveField(() => Rating, { nullable: true })
   async rating(@Parent() parent: Laptop) {
      const laptop: Laptop = await this.laptop.findUnique({
         where: { id: parent.id },
         select: {
            comments: true,
         },
      })

      if (laptop?.comments) {
         const comments = laptop.comments
         const rating: IRating = {
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
         }

         comments.forEach((comment) => rankSum(rating, comment))

         return rating
      }

      return null

      function rankSum(rating: IRating, comment: Comment) {
         switch (comment.rank) {
            case 'ONE': {
               rating.one += 1
               break
            }
            case 'TWO': {
               rating.two += 1
               break
            }
            case 'THREE': {
               rating.three += 1
               break
            }
            case 'FOUR': {
               rating.four += 1
               break
            }
            case 'FIVE': {
               rating.five += 1
               break
            }
            default: {
               throw new Error(`${rating} is invalid`)
            }
         }
      }
   }
}
