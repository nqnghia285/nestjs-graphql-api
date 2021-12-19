export async function handleResolver<
   TService,
   TAction extends keyof TService,
   TArgs
>(service: TService, action: TAction, args: TArgs) {
   if (typeof service[action] === 'function') {
      // @ts-expect-error: Unreachable code error
      return service[action](args)
   }

   return null
}
