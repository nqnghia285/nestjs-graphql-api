import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PassageReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Passage',
}
