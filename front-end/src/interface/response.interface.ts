import { IUserInfo } from './user-info.interface'

export interface IResponse {
   isSuccess?: boolean
   message?: string

   profile?: IUserInfo
}
