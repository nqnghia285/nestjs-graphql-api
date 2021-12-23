import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const VideoReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Video',
}
