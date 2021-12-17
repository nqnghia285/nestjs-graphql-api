import { applyDecorators, UseGuards } from '@nestjs/common'
import { GqlAuthGuard, RolesGuard } from '~/guards'
import { Roles } from './roles.decorator'

export function Auth(...roles: string[]) {
   return applyDecorators(Roles(...roles), UseGuards(GqlAuthGuard, RolesGuard))
}
