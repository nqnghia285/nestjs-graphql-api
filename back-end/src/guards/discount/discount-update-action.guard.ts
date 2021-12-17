import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const DiscountUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Discount',
}
