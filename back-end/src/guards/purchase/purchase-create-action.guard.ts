import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PurchaseCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Purchase',
}
