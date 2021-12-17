import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const DiscountReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Discount',
}
