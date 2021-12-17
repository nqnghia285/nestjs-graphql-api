import { Env, System } from '~/interface'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import cookieParser from 'cookie-parser'
import { graphqlUploadExpress } from 'graphql-upload'
import { address } from 'ip'
import { AppModule } from '~/app.module'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)

   const configService = app.get(ConfigService)
   const host = configService.get<System>(Env.SYSTEM).host
   const port = configService.get<System>(Env.SYSTEM).port
   const origin = configService.get<System>(Env.SYSTEM).origin
   const graphqlPath = configService.get<System>(Env.SYSTEM).graphql_path

   app.enableCors({
      origin: origin,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
   })

   app.use(cookieParser())

   app.use(
      graphqlPath,
      graphqlUploadExpress({
         maxFileSize: 1e7,
         maxFiles: 10,
      })
   )

   await app.listen(port, host, async () => {
      const announcement = {
         url: await app.getUrl(),
         address: address(),
         message: `NestJS Server is running!`,
      }
      console.log(announcement)
   })
}

bootstrap()
