import { ArgsType, Field } from '@nestjs/graphql'
import { FindUniqueUserArgs } from '~/generated/prisma-nestjs-graphql'
import { UserInclude, UserSelect } from '../..'

@ArgsType()
export class UserFindUniqueArgs extends FindUniqueUserArgs {
   @Field(() => UserSelect, { nullable: true })
   select?: UserSelect | null

   @Field(() => UserInclude, { nullable: true })
   include?: UserInclude | null

   @Field({ nullable: true })
   rejectOnNotFound?: boolean
}
