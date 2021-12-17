import { Response } from '~/graphql/typedefs'

export async function handleResolver<
   TService,
   TAction extends keyof TService,
   TArgs
>(service: TService, action: TAction, args: TArgs): Promise<Response> {
   const response: Response = {
      isSuccess: false,
      message: `${action} fail!`,
      data: null,
      action: action,
      errors: [],
   }

   if (typeof service[action] === 'function') {
      // @ts-expect-error: Unreachable code error
      await service[action](args)
         .then((data) => {
            response.isSuccess = true
            response.message = `${action} successfully!`
            response.data = data
         })
         .catch((errors) => {
            console.error(errors)
            response.errors.push(errors)
         })
   }

   return response
}
