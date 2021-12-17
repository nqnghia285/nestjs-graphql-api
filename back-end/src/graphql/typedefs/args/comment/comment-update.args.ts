import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOneCommentArgs } from '~/generated/prisma-nestjs-graphql'
import { CommentInclude, CommentSelect } from '../..'

@ArgsType()
export class CommentUpdateArgs extends UpdateOneCommentArgs {
   @Field(() => CommentSelect, { nullable: true })
   select?: CommentSelect | null

   @Field(() => CommentInclude, { nullable: true })
   include?: CommentInclude | null
}
