import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOneLaptopArgs } from '~/generated/prisma-nestjs-graphql'
import { LaptopInclude, LaptopSelect } from '../..'

@ArgsType()
export class LaptopCreateArgs extends CreateOneLaptopArgs {
   @Field(() => LaptopSelect, { nullable: true })
   select?: LaptopSelect | null

   @Field(() => LaptopInclude, { nullable: true })
   include?: LaptopInclude | null
}
