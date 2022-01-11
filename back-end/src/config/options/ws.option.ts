import { WSKey } from '~/interface'

export const wsOptions = {
   namespace: WSKey.NSP,
   cookie: true,
   cors: {
      origin: [process.env.ORIGIN],
      methods: ['GET', 'POST'],
      allowedHeaders: [
         'Content-Type',
         'Authorization',
         'X-Requested-With',
         'Origin',
         'Accept',
      ],
      credentials: true,
   },
}
