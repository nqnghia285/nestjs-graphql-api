import { login } from '~/utilities'
import { Response } from '~/interface'
import { useState } from 'react'

export interface UserInput {
   username: string
   password: string
}

export function useLogin(
   userInput?: UserInput | (() => UserInput)
): [Promise<Response> | null, typeof setUserInputState] {
   const [userInputState, setUserInputState] = useState(userInput)

   const response = userInputState
      ? login(userInputState.username, userInputState.username)
           .then((res) => res)
           .catch(
              (errors): Response => ({
                 action: 'logIn',
                 isSuccess: false,
                 data: null,
                 message: 'Failed',
                 errors: [errors],
              })
           )
      : null

   return [response, setUserInputState]
}
