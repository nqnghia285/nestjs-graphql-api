import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PersonDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Person',
}
