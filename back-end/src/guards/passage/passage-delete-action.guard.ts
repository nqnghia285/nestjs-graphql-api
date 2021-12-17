import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PassageDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Passage',
}
