import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PurchaseUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Purchase',
}
