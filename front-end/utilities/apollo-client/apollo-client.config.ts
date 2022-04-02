import { ApolloClient, from, HttpOptions, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { DocumentNode } from 'graphql'

const httpOptions: HttpOptions = {
   uri: process.env.urlApi,
   credentials: 'include',
}

const uploadLink = createUploadLink(httpOptions)

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
         console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
         )
      )

   if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const apolloClient = new ApolloClient({
   credentials: 'include',
   link: from([errorLink, uploadLink]),
   cache: new InMemoryCache(),
   connectToDevTools: true,
})

export function query(documentNode: DocumentNode, variables: any) {
   return apolloClient.query({
      query: documentNode,
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
      variables,
   })
}

export function mutate(documentNode: DocumentNode, variables: any) {
   return apolloClient.mutate({
      mutation: documentNode,
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
      variables,
   })
}

export default apolloClient
