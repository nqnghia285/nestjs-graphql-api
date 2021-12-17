import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const LaptopDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Laptop',
}
