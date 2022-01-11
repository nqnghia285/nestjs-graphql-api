import { LoggerService } from '@libs/logger'
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import {
   ConnectedSocket,
   MessageBody,
   SubscribeMessage,
   WebSocketGateway,
   WebSocketServer,
   WsResponse,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { wsOptions } from '~/config'
import { Profile } from '~/decorators'
import { JwtAuthGuard } from '~/guards'
import { IUserInfo, WSKey } from '~/interface'

@WebSocketGateway(wsOptions)
export class ChatGateway {
   constructor(private readonly logger: LoggerService) {}

   @WebSocketServer()
   server: Server

   @SubscribeMessage(WSKey.CONNECTION)
   handleConnection(@ConnectedSocket() client: Socket) {
      this.logger.log('Client is connected!')
      client.emit(WSKey.CONNECTION, 'Connected')
   }

   @SubscribeMessage(WSKey.DISCONNECT)
   handleDisconnect(@ConnectedSocket() client: Socket) {
      this.logger.log('Client is disconnected!')
      client.disconnect(true)
   }

   @UseGuards(JwtAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(WSKey.JOIN_SUPPORT_TEAM_ROOM)
   handleJoinSupportRoom(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: unknown,
      @Profile() profile: IUserInfo
   ) {
      if (profile) {
         client.join(WSKey.SUPPORT_TEAM_ROOM)
         this.server
            .to([WSKey.SUPPORT_TEAM_ROOM])
            .emit(WSKey.JOIN_SUPPORT_TEAM_ROOM, {
               isSuccess: true,
               message: `${profile.fullname} joined the support team room`,
            })
      } else {
         client.emit(WSKey.JOIN_SUPPORT_TEAM_ROOM, {
            isSuccess: false,
            message: `You is not allowed to join the support team room`,
         })
      }
      this.logger.log(payload, `${WSKey.JOIN_SUPPORT_TEAM_ROOM}:payload`)
      this.logger.log(profile, `${WSKey.JOIN_SUPPORT_TEAM_ROOM}:profile`)
   }

   @UseGuards(JwtAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(WSKey.NEED_SUPPORT)
   handleNeedSupport(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: any,
      @Profile() profile: IUserInfo
   ) {
      if (client.rooms.has(WSKey.SUPPORT_TEAM_ROOM)) {
         const { customerSocketId } = payload
         // * Send a notification to staffs in 'support-team-room' but the sender
         client.broadcast.to(WSKey.SUPPORT_TEAM_ROOM).emit(WSKey.NEED_SUPPORT, {
            supported: true,
            customerSocketId,
            staffSocketId: client.id,
         })

         // * Join a room only the staff and the customer
         const room = `${client.id}-supports-${customerSocketId}`
         client.join(room)

         // * Send a notification to the customer to join the room
         client.to(customerSocketId).emit(WSKey.NEED_SUPPORT, {
            room,
            staffSocketId: client.id,
         })

         this.logger.log(payload, 'message:payload')
         this.logger.log(profile, 'handleNeedSupport:profile')
      } else {
         client.to(WSKey.SUPPORT_TEAM_ROOM).emit(WSKey.NEED_SUPPORT, {
            customerSocketId: client.id,
            message: payload,
         })
      }
   }

   @UseGuards(JwtAuthGuard)
   @UsePipes(new ValidationPipe())
   @SubscribeMessage(WSKey.MESSAGE)
   handleMessage(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: any,
      @Profile() profile: IUserInfo
   ) {
      const { room, message } = payload
      client.to(room).emit(WSKey.MESSAGE, message)

      this.logger.log(payload, 'message:payload')
      this.logger.log(profile, 'handleMessage:profile')
   }
}
