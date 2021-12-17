import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PriceMapReadAction: PolicyOption = {
   action: Action.READ,
   model: 'PriceMap',
}
