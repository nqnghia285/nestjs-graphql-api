import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniquePostArgs } from '~/generated/prisma-nestjs-graphql'
import { PostInclude, PostSelect } from '../..'

@ArgsType()
export class PostFindUniqueArgs extends FindUniquePostArgs {
   @Field(() => PostSelect, { nullable: true })
   select?: PostSelect | null

   @Field(() => PostInclude, { nullable: true })
   include?: PostInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
