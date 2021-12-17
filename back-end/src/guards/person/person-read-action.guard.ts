import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PersonReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Person',
}
