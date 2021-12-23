import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const VideoUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Video',
}
