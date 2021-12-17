import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CustomerDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Customer',
}
