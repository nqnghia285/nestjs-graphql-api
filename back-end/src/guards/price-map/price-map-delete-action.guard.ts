import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PriceMapDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'PriceMap',
}
