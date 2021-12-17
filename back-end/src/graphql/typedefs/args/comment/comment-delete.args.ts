import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOneCommentArgs } from '~/generated/prisma-nestjs-graphql'
import { CommentInclude, CommentSelect } from '../..'

@ArgsType()
export class CommentDeleteArgs extends DeleteOneCommentArgs {
   @Field(() => CommentSelect, { nullable: true })
   select?: CommentSelect | null

   @Field(() => CommentInclude, { nullable: true })
   include?: CommentInclude | null
}
