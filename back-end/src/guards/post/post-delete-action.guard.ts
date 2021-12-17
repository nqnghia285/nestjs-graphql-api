import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PostDeleteAction: PolicyOption = {
   action: Action.DELETE,
   model: 'Post',
}
