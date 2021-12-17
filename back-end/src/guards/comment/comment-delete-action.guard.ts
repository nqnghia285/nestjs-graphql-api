import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CommentDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Comment',
}
