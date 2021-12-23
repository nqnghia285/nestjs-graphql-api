import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const ImageCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Image',
}
