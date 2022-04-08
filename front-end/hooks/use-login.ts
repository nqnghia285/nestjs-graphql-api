import { QueryResult, useQuery } from '@apollo/client'
import { useState } from 'react'
import { Response } from '~/interface'
import { LOGIN } from '~/utilities'

export interface UserInput {
   username: string
   password: string
}

export function useLogin(): [
   QueryResult<Response, UserInput>,
   typeof setUserInputState,
   typeof setSkip
] {
   const [userInputState, setUserInputState] = useState<UserInput>()
   const [skip, setSkip] = useState(true)

   const response = useQuery<Response, UserInput>(LOGIN, {
      variables: userInputState,
      skip: skip,
   })

   return [response, setUserInputState, setSkip]
}
