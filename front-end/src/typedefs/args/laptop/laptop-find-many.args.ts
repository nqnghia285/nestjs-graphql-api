import { ArgsType, Field } from '@nestjs/graphql'
import { FindManyLaptopArgs } from '~/generated/prisma-nestjs-graphql'
import { LaptopInclude, LaptopSelect } from '../..'

@ArgsType()
export class LaptopFindManyArgs extends FindManyLaptopArgs {
   @Field(() => LaptopSelect, { nullable: true })
   select?: LaptopSelect | null

   @Field(() => LaptopInclude, { nullable: true })
   include?: LaptopInclude | null
}
