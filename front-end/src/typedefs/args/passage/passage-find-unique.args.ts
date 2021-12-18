import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePassageArgs } from '~/generated/prisma-nestjs-graphql'
import { PassageInclude, PassageSelect } from '../..'

@ArgsType()
export class PassageFindUniqueArgs extends FindUniquePassageArgs {
   @Field(() => PassageSelect, { nullable: true })
   select?: PassageSelect | null

   @Field(() => PassageInclude, { nullable: true })
   include?: PassageInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
