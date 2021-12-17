import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const LaptopCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Laptop',
}
