import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const UserReadAction: PolicyOption = {
   action: Action.READ,
   model: 'User',
}
