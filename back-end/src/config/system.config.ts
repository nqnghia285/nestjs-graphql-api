import { registerAs } from '@nestjs/config'
import { isURL } from 'class-validator'

export const system = registerAs('system', () => ({
   node_env: process.env.NODE_ENV,
   host: process.env.HOST,
   port: parseInt(process.env.PORT, 10),
   origin: JSON.parse(process.env.ORIGIN) as string | string[],
   url: process.env.URL,
   graphql_path: process.env.GRAPHQL_PATH,
   jwt_key: process.env.JWT_KEY,
   token_name: process.env.TOKEN_NAME,
   author: process.env.AUTHOR,
}))
