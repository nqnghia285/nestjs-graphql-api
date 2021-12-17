import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PurchaseReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Purchase',
}
