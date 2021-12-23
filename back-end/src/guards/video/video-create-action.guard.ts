import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const VideoCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Video',
}
