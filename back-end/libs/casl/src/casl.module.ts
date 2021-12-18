import { ApiConfigModule } from '@libs/api-config'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { CaslAbilityFactory } from './casl.service'
import { PoliciesGuard } from './policies.guard'

@Module({
   imports: [PrismaModule, ApiConfigModule],
   providers: [CaslAbilityFactory, PoliciesGuard],
   exports: [CaslAbilityFactory, PoliciesGuard, ApiConfigModule],
})
export class CaslModule {}
