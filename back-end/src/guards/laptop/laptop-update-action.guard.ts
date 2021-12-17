import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const LaptopUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Laptop',
}
