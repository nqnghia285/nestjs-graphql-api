import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PriceMapUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'PriceMap',
}
