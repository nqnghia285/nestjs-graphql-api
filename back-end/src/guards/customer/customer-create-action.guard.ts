import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CustomerCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Customer',
}
