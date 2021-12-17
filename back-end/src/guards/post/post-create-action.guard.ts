import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PostCreateAction: PolicyOption = {
   action: Action.CREATE,
   model: 'Post',
}
