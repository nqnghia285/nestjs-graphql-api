import { io, Socket } from 'socket.io-client'

export class SocketIOClient {
   constructor(nsp: string) {
      this.socket = io(nsp, { withCredentials: true })
   }

   private socket!: Socket

   emit(ev: string, ...args: any[]) {
      this.socket.emit(ev, args)
   }

   emitTo(rooms: string[], ev: string, message: any) {
      this.socket.emit(ev, { rooms, message })
   }

   getId() {
      return this.socket.id
   }

   connected() {
      return this.socket.connected
   }

   disconnected() {
      return this.socket.disconnected
   }

   onConnect(callback: () => void) {
      this.socket.on('connect', callback)
   }

   onDisconnet(callback: () => void) {
      this.socket.on('disconnect', callback)
   }

   onStaffJoinsSupportTeamRoom(callback: (payload: unknown) => void) {
      this.socket.on('staff-joins-support-team-room', callback)
   }

   onStaffLeavesSupportTeamRoom(callback: (payload: unknown) => void) {
      this.socket.on('staff-leaves-support-team-room', callback)
   }

   onCustomerNeedsSupport(callback: (payload: unknown) => void) {
      this.socket.on('customer-needs-support', callback)
   }

   onStaffResponsibleForCustomerSupport(callback: (payload: unknown) => void) {
      this.socket.on('staff-responsible-for-customer-support', callback)
   }

   onMessage(callback: (payload: unknown) => void) {
      this.socket.on('message', callback)
   }

   off(ev: string) {
      this.socket.removeListener(ev)
   }

   offAll(ev?: string) {
      this.socket.removeAllListeners(ev)
   }
}
