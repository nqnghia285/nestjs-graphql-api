import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOnePassageArgs } from '~/generated/prisma-nestjs-graphql'
import { PassageInclude, PassageSelect } from '../..'

@ArgsType()
export class PassageDeleteArgs extends DeleteOnePassageArgs {
   @Field(() => PassageSelect, { nullable: true })
   select?: PassageSelect | null

   @Field(() => PassageInclude, { nullable: true })
   include?: PassageInclude | null
}
