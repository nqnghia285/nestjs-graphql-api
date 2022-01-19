import { IUserInfo } from '~/interface'

export interface Payload {
   isSuccess?: boolean
   message?: string
   staffSocketId?: string
   customerSocketId?: string
   profile?: IUserInfo
   room?: string
}
