import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PriceMapCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'PriceMap',
}
