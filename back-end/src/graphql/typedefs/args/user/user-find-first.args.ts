import { ArgsType, Field } from '@nestjs/graphql'
import { FindFirstUserArgs } from '~/generated/prisma-nestjs-graphql'
import { UserInclude, UserSelect } from '../..'

@ArgsType()
export class UserFindFirstArgs extends FindFirstUserArgs {
   @Field(() => UserSelect, { nullable: true })
   select?: UserSelect | null

   @Field(() => UserInclude, { nullable: true })
   include?: UserInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
