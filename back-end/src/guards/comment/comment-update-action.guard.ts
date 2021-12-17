import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const CommentUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Comment',
}
