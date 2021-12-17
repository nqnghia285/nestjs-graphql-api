import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOnePassageArgs } from '~/generated/prisma-nestjs-graphql'
import { PassageInclude, PassageSelect } from '../..'

@ArgsType()
export class PassageCreateArgs extends CreateOnePassageArgs {
   @Field(() => PassageSelect, { nullable: true })
   select?: PassageSelect | null

   @Field(() => PassageInclude, { nullable: true })
   include?: PassageInclude | null
}
