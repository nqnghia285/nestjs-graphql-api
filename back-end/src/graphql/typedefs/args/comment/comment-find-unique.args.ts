import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueCommentArgs } from '~/generated/prisma-nestjs-graphql'
import { CommentInclude, CommentSelect } from '../..'

@ArgsType()
export class CommentFindUniqueArgs extends FindUniqueCommentArgs {
   @Field(() => CommentSelect, { nullable: true })
   select?: CommentSelect | null

   @Field(() => CommentInclude, { nullable: true })
   include?: CommentInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
