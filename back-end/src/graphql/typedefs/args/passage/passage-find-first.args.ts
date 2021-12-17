import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPassageArgs } from '~/generated/prisma-nestjs-graphql'
import { PassageInclude, PassageSelect } from '../..'

@ArgsType()
export class PassageFindFirstArgs extends FindFirstPassageArgs {
   @Field(() => PassageSelect, { nullable: true })
   select?: PassageSelect | null

   @Field(() => PassageInclude, { nullable: true })
   include?: PassageInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
