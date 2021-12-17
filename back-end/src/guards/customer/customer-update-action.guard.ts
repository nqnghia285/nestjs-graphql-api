import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CustomerUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Customer',
}
