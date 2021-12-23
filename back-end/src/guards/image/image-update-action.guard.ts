import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const ImageUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Image',
}
