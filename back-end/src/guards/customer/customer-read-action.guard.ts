import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CustomerReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Customer',
}
