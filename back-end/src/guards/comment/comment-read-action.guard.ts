import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CommentReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Comment',
}
