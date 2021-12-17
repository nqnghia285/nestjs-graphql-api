import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { PurchaseResolver } from './purchase.resolver'
import { PurchaseService } from './purchase.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [PurchaseResolver, PurchaseService],
   exports: [PurchaseService],
})
export class PurchaseModule {}
