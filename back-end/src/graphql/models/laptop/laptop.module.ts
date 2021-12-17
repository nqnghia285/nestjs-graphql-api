import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { LaptopResolver } from './laptop.resolver'
import { LaptopService } from './laptop.service'

@Module({
   imports: [PrismaModule, CaslModule],
   providers: [LaptopResolver, LaptopService],
   exports: [LaptopService],
})
export class LaptopModule {}
