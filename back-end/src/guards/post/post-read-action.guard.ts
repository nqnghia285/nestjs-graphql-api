import { PolicyOption } from '@libs/casl'
import { Action } from '~/interface'

export const PostReadAction: PolicyOption = {
   action: Action.READ,
   model: 'Post',
}
