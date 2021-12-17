import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOnePostArgs } from '~/generated/prisma-nestjs-graphql'
import { PostInclude, PostSelect } from '../..'

@ArgsType()
export class PostDeleteArgs extends DeleteOnePostArgs {
   @Field(() => PostSelect, { nullable: true })
   select?: PostSelect | null

   @Field(() => PostInclude, { nullable: true })
   include?: PostInclude | null
}
