import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOnePostArgs } from '~/generated/prisma-nestjs-graphql'
import { PostInclude, PostSelect } from '../..'

@ArgsType()
export class PostCreateArgs extends CreateOnePostArgs {
   @Field(() => PostSelect, { nullable: true })
   select?: PostSelect | null

   @Field(() => PostInclude, { nullable: true })
   include?: PostInclude | null
}
