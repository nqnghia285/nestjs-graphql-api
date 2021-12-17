import Joi from 'joi'
import { NodeEnv } from '~/interface'

export const validationSchema = Joi.object({
   NODE_ENV: Joi.string()
      .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION, NodeEnv.PROVISION, NodeEnv.TEST)
      .default(NodeEnv.DEVELOPMENT),
   HOST: Joi.string().valid('0.0.0.0', 'localhost', '127.0.0.1').default('0.0.0.0'),
   PORT: Joi.number().port().default(80),
   ORIGIN: Joi.string().uri().required(),
   URL: Joi.string().uri().required(),
   GRAPHQL_PATH: Joi.string().required(),
   DATABASE_URL: Joi.string().uri().required(),
   JWT_KEY: Joi.string().required(),
   TOKEN_NAME: Joi.string().required(),
   AUTHOR: Joi.string().required(),
})
