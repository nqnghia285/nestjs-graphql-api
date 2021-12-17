import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const LaptopReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Laptop',
}
