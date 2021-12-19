import { ApiConfigModule } from '@libs/api-config'
import { LoggerModule } from '@libs/logger'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { CaslAbilityFactory } from './casl.service'
import { PoliciesGuard } from './policies.guard'

@Module({
   imports: [PrismaModule, ApiConfigModule, LoggerModule],
   providers: [CaslAbilityFactory, PoliciesGuard],
   exports: [CaslAbilityFactory, PoliciesGuard, ApiConfigModule, LoggerModule],
})
export class CaslModule {}
