import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const ImageReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Image',
}
