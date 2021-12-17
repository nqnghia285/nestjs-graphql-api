import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PassageCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Passage',
}
