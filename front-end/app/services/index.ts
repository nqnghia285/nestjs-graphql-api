import { createApi } from '@reduxjs/toolkit/query'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { Response } from '~/interface'
import { apolloClient, LOGIN } from '~/utilities'

const api = createApi({
   baseQuery: graphqlRequestBaseQuery({
      url: process.env.urlApi,
   }),
   endpoints: (builder) => ({
      login: builder.query<Response, { username: string; password: string }>({
         query: ({ username, password }) => ({
            document: LOGIN,
            variables: {
               username,
               password,
            },
         }),
      }),
   }),
})

export const { enhanceEndpoints } = api

enhanceEndpoints()

export default api
