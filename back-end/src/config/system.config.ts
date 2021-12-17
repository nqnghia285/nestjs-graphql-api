import { registerAs } from '@nestjs/config'

export const system = registerAs('system', () => ({
   node_env: process.env.NODE_ENV,
   host: process.env.HOST,
   port: parseInt(process.env.PORT, 10),
   origin: process.env.ORIGIN,
   url: process.env.URL,
   graphql_path: process.env.GRAPHQL_PATH,
   jwt_key: process.env.JWT_KEY,
   token_name: process.env.TOKEN_NAME,
   author: process.env.AUTHOR,
}))
