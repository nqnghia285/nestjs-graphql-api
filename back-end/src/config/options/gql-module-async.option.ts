import { ApiConfigModule, ApiConfigService } from '@libs/api-config'
import { GqlModuleAsyncOptions } from '@nestjs/graphql'
import {
   ApolloServerPluginLandingPageDisabled,
   ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core'
import { ExpressContext } from 'apollo-server-express'
import { join } from 'path'
import { NodeEnv } from '~/interface'
import { HandleResolverParams } from '~/plugins'

export const gqlModuleAsyncOptions: GqlModuleAsyncOptions = {
   imports: [ApiConfigModule],
   inject: [ApiConfigService],
   useFactory: async (config: ApiConfigService) => ({
      debug: config.system.node_env !== NodeEnv.PRODUCTION,
      dateScalarMode: 'timestamp',
      validate: false,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: false,
      context: ({ req, res }: ExpressContext) => {
         return { req, res, user: req.user }
      },
      cors: {
         origin: config.system.origin,
         credentials: true,
         methods: ['GET', 'POST', 'PUT', 'DELETE'],
      },
      path: config.system.graphql_path,
      formatResponse: (res) => {
         /**
          * ! The data is a constant object containing a property with the name of the resolver.
          * ! Transfering all values of this property to the data object for convenient.
          */
         // if (res.data) {
         //    res.data = { ...Object.values(res.data).at(0) }
         // }

         return res
      },
      plugins: [
         config.system.node_env !== NodeEnv.PROVISION
            ? ApolloServerPluginLandingPageGraphQLPlayground()
            : ApolloServerPluginLandingPageDisabled(),
         HandleResolverParams,
      ],
   }),
}
