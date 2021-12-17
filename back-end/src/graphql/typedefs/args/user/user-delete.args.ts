import { ArgsType, Field } from '@nestjs/graphql'
import { DeleteOneUserArgs } from '~/generated/prisma-nestjs-graphql'
import { UserInclude, UserSelect } from '../..'

@ArgsType()
export class UserDeleteArgs extends DeleteOneUserArgs {
   @Field(() => UserSelect, { nullable: true })
   select?: UserSelect | null

   @Field(() => UserInclude, { nullable: true })
   include?: UserInclude | null
}
