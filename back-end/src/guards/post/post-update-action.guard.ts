import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PostUpdateAction: PolicyOption = {
   action: Action.UPDATE,
   model: 'Post',
}
