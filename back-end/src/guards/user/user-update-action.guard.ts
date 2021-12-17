import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const UserUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'User',
}
