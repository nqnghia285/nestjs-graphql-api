import { DocumentNode } from 'graphql'
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'

const httpOptions = { uri: '/graphql' }

const uploadLink = createUploadLink(httpOptions)

const batchHttpLink = new BatchHttpLink(httpOptions)

const httpLink = new HttpLink(httpOptions)

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
         console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      )

   if (networkError) console.log(`[Network error]: ${networkError}`)
})

const apolloClient = new ApolloClient({
   credentials: 'include',
   link: from([errorLink, uploadLink, batchHttpLink, httpLink]),
   cache: new InMemoryCache(),
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
