import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CommentCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Comment',
}
