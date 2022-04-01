import { Json } from './json.interface'

export interface Response {
   action: string
   isSuccess: boolean
   data?: Json | null
   errors?: Json[]
   message?: string
}
