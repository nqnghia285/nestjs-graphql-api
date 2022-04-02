import { ApolloError } from '@apollo/client'

export function generateErrorMessage(errorMessage?: ApolloError) {
   return errorMessage
      ? errorMessage.clientErrors.length > 0
         ? `[Client error]: ${errorMessage.clientErrors[0].name}: ${errorMessage.clientErrors[0].message}`
         : errorMessage.graphQLErrors.length > 0
         ? `[Graphql error]: ${errorMessage.graphQLErrors[0].name}: ${errorMessage.graphQLErrors[0].message}`
         : errorMessage.networkError
         ? `[Networt error]: ${errorMessage.networkError.name}: ${errorMessage.networkError.message}`
         : `[Error]: ${errorMessage.name}: ${errorMessage.message}`
      : 'None'
}
