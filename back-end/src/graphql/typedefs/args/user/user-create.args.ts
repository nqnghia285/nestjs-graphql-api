import { ArgsType, Field } from '@nestjs/graphql'
import { CreateOneUserArgs } from '~/generated/prisma-nestjs-graphql'
import { UserInclude, UserSelect } from '../..'

@ArgsType()
export class UserCreateArgs extends CreateOneUserArgs {
   @Field(() => UserSelect, { nullable: true })
   select?: UserSelect | null

   @Field(() => UserInclude, { nullable: true })
   include?: UserInclude | null
}
