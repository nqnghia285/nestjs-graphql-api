export async function handleResolver<
   TService,
   TAction extends keyof TService,
   TArgs
>(service: TService, action: TAction, args: TArgs) {
   if (typeof service[action] === 'function') {
      if (args?.['select' as keyof TArgs]) {
         if (Object.keys(args['select' as keyof TArgs]).length === 0) {
            delete args['select' as keyof TArgs]
         }
      }
      // @ts-expect-error: Unreachable code error
      return service[action](args)
   }

   return null
}
