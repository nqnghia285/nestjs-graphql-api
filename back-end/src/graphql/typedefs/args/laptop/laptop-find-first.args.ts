import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstLaptopArgs } from '~/generated/prisma-nestjs-graphql'
import { LaptopInclude, LaptopSelect } from '../..'

@ArgsType()
export class LaptopFindFirstArgs extends FindFirstLaptopArgs {
   @Field(() => LaptopSelect, { nullable: true })
   select?: LaptopSelect | null

   @Field(() => LaptopInclude, { nullable: true })
   include?: LaptopInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
