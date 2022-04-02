import { Response } from '~/interface'
import { query } from '../apollo-client.config'
import { LOGOUT } from '../docs'

export function logout() {
   return query(LOGOUT, null).then<Response>((res) => {
      if (res.data) {
         return res.data.logOut
      } else {
         return {
            action: 'logOut',
            data: null,
            isSuccess: false,
            errors: res.errors,
            message: res.errors?.[0]?.message,
         }
      }
   })
}
