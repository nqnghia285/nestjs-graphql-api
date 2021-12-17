import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PurchaseDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Purchase',
}
