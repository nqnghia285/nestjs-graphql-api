import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const UserDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'User',
}
