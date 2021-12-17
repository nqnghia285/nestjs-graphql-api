import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOnePostArgs } from '~/generated/prisma-nestjs-graphql'
import { PostInclude, PostSelect } from '../..'

@ArgsType()
export class PostUpdateArgs extends UpdateOnePostArgs {
   @Field(() => PostSelect, { nullable: true })
   select?: PostSelect | null

   @Field(() => PostInclude, { nullable: true })
   include?: PostInclude | null
}
