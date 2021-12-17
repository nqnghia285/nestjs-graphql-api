import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const UserCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'User',
}
