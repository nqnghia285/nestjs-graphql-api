import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PersonCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Person',
}
