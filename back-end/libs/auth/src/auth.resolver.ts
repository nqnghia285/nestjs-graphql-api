import { ApiConfigService } from '@libs/api-config'
import { ValidationPipe } from '@nestjs/common'
import { Args, Context, Query, Resolver } from '@nestjs/graphql'
import { AuthLogInArgs, Response } from '~/graphql/typedefs'
import { IContext } from '~/interface'
import { AuthService } from './auth.service'

@Resolver()
export class AuthResolver {
   constructor(
      private readonly auth: AuthService,
      private readonly apiConfig: ApiConfigService
   ) {}

   @Query(() => Response)
   async logIn(
      @Args(new ValidationPipe()) { username, password }: AuthLogInArgs,
      @Context() { res }: IContext
   ) {
      const response: Response = {
         action: 'logIn',
         isSuccess: false,
         message: 'Failed!',
         data: null,
         errors: [],
      }

      await this.auth.validateUser(username, password).then((profile) => {
         console.log('profile', profile)
         if (profile) {
            response.isSuccess = true
            response.message = 'Successfully!'
            response.data = JSON.parse(JSON.stringify(profile))

            const accessToken = this.auth.createJWT(profile)
            const tokenName = this.apiConfig.system.token_name

            res.cookie(tokenName, accessToken, { httpOnly: true })
         } else {
            response.errors.push(
               JSON.parse(
                  JSON.stringify({
                     message: `username and password are not matched or ${username} is not existed in database!`,
                  })
               )
            )
         }
      })

      return response
   }
}
