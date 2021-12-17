import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const DiscountCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Discount',
}
