import { gql } from '@apollo/client'

export const LOGOUT = gql`
   query {
      logOut {
         action
         data
         errors
         isSuccess
         message
      }
   }
`
