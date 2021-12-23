import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const ImageDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Image',
}
