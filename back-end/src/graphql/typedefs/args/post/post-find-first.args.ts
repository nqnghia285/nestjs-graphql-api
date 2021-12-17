import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstPostArgs } from '~/generated/prisma-nestjs-graphql'
import { PostInclude, PostSelect } from '../..'

@ArgsType()
export class PostFindFirstArgs extends FindFirstPostArgs {
   @Field(() => PostSelect, { nullable: true })
   select?: PostSelect | null

   @Field(() => PostInclude, { nullable: true })
   include?: PostInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
