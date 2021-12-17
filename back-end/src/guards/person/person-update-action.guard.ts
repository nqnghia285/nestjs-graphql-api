import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PersonUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Person',
}
