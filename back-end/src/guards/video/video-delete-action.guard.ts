import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const VideoDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Video',
}
