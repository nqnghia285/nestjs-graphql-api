import { LoggerService } from '@libs/logger'
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import {
   MessageBody,
   SubscribeMessage,
   WebSocketGateway,
   WsResponse,
} from '@nestjs/websockets'
import { Profile } from '~/decorators'
import { JwtAuthGuard } from '~/guards'
import { IUserInfo } from '~/interface'

@WebSocketGateway({
   namespace: 'support',
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
})
export class ChatGateway {
   constructor(private readonly logger: LoggerService) {}

   @SubscribeMessage('connection')
   handleConnection(): WsResponse<string> {
      this.logger.log('Client is connected!')
      return { event: 'connection', data: 'Connected' }
   }

   @UseGuards(JwtAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage('message')
   handleMessage(
      @MessageBody() payload: unknown,
      @Profile() profile: IUserInfo
   ): WsResponse<string> {
      this.logger.log(payload, 'message:payload')
      this.logger.log(profile, 'handleMessage:profile')
      return { event: 'message', data: 'Hi! Client!' }
   }
}
