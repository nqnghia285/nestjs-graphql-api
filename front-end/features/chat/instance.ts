import { SocketIOClient } from '.'

const socket = new SocketIOClient('/support')

socket.onConnect(() => {
   console.log('Connected')
})

socket.onDisconnet(() => {
   console.log('Disconnected')
})

socket.onStaffJoinsSupportTeamRoom((payload) => {
   console.log('Message: ', payload)
})

socket.onStaffLeavesSupportTeamRoom((payload) => {
   console.log('Message: ', payload)
})

socket.onCustomerNeedsSupport((payload) => {
   console.log('Message: ', payload)
})

socket.onStaffResponsibleForCustomerSupport((payload) => {
   console.log('Message: ', payload)
})

socket.onMessage((payload) => {
   console.log('Message: ', payload)
})

export default socket
