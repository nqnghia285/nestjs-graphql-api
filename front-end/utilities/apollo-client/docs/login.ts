import { gql } from '@apollo/client'

export const LOGIN = gql`
   query ($username: String!, $password: String!) {
      logIn(username: $username, password: $password) {
         action
         data
         errors
         isSuccess
         message
      }
   }
`
