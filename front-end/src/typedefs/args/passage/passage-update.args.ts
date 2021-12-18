import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOnePassageArgs } from '~/generated/prisma-nestjs-graphql'
import { PassageInclude, PassageSelect } from '../..'

@ArgsType()
export class PassageUpdateArgs extends UpdateOnePassageArgs {
   @Field(() => PassageSelect, { nullable: true })
   select?: PassageSelect | null

   @Field(() => PassageInclude, { nullable: true })
   include?: PassageInclude | null
}
