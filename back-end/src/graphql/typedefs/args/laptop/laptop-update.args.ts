import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOneLaptopArgs } from '~/generated/prisma-nestjs-graphql'
import { LaptopInclude, LaptopSelect } from '../..'

@ArgsType()
export class LaptopUpdateArgs extends UpdateOneLaptopArgs {
   @Field(() => LaptopSelect, { nullable: true })
   select?: LaptopSelect | null

   @Field(() => LaptopInclude, { nullable: true })
   include?: LaptopInclude | null
}
