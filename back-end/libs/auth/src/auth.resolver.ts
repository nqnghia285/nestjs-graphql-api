import { ApiConfigService } from '@libs/api-config'
import { LoggerService } from '@libs/logger'
import { ValidationPipe } from '@nestjs/common'
import { Args, Context, Query, Resolver } from '@nestjs/graphql'
import { AuthLogInArgs, Response } from '~/graphql/typedefs'
import { IContext } from '~/interface'
import { AuthService } from './auth.service'

@Resolver()
export class AuthResolver {
   constructor(
      private readonly auth: AuthService,
      private readonly apiConfig: ApiConfigService,
      private readonly logger: LoggerService
   ) {}

   @Query(() => Response)
   async logIn(
      @Args(new ValidationPipe()) { username, password }: AuthLogInArgs,
      @Context() { res }: IContext
   ) {
      const response: Response = {
         action: 'logIn',
         isSuccess: false,
         message: `Fail`,
         data: null,
         errors: [],
      }

      await this.auth
         .validateUser(username, password)
         .then((profile) => {
            if (profile) {
               response.isSuccess = true
               response.message = 'Successfully!'
               response.data = profile

               const accessToken = this.auth.createJWT(profile)
               const tokenName = this.apiConfig.system.token_name

               res.cookie(tokenName, accessToken, { httpOnly: true })
            } else {
               response.errors.push({
                  message: `username and password are not matched or ${username} is not existed in database!`,
               })
            }
         })
         .catch((errors) => response.errors.push(errors))

      if (this.apiConfig.system.node_env !== 'production') {
         this.logger.log(response, `${AuthResolver.name}:logIn`)
      }

      return response
   }
}
