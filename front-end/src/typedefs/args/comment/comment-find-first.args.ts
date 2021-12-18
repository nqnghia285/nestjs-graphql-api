import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstCommentArgs } from '~/generated/prisma-nestjs-graphql'
import { CommentInclude, CommentSelect } from '../..'

@ArgsType()
export class CommentFindFirstArgs extends FindFirstCommentArgs {
   @Field(() => CommentSelect, { nullable: true })
   select?: CommentSelect | null

   @Field(() => CommentInclude, { nullable: true })
   include?: CommentInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
