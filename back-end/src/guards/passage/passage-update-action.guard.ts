import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PassageUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Passage',
}
