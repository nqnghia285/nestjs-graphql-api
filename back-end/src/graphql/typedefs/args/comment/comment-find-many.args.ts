import 'reflect-metadata'
import { ArgsType, Field } from '@nestjs/graphql'
import { FindManyCommentArgs } from '~/generated/prisma-nestjs-graphql'
import { CommentInclude, CommentSelect } from '../..'

@ArgsType()
export class CommentFindManyArgs extends FindManyCommentArgs {
   @Field(() => CommentSelect, { nullable: true })
   select?: CommentSelect | null

   @Field(() => CommentInclude, { nullable: true })
   include?: CommentInclude | null
}
