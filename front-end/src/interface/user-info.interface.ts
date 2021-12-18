import { Gender, Role } from './enums'

export interface IUserInfo {
   id: string
   fullname: string
   gender: Gender
   phone: string
   email: string
   role: Role
}
