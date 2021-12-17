import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const DiscountDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Discount',
}
