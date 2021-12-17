import { ArgsType, Field } from '@nestjs/graphql'
import { UpdateOneUserArgs } from '~/generated/prisma-nestjs-graphql'
import { UserInclude, UserSelect } from '../..'

@ArgsType()
export class UserUpdateArgs extends UpdateOneUserArgs {
   @Field(() => UserSelect, { nullable: true })
   select?: UserSelect | null

   @Field(() => UserInclude, { nullable: true })
   include?: UserInclude | null
}
