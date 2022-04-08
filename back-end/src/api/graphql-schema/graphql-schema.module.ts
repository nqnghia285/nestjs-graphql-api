import { ApiConfigModule } from '@libs/api-config'
import { CaslModule } from '@libs/casl'
import { PrismaModule } from '@libs/prisma'
import { Module } from '@nestjs/common'
import { GraphQLSchemaController } from './graphql-schema.resolver'
import { GraphQLSchemaService } from './graphql-schema.service'

@Module({
   imports: [ApiConfigModule, CaslModule, PrismaModule],
   controllers: [GraphQLSchemaController],
   providers: [GraphQLSchemaService],
   exports: [GraphQLSchemaService],
})
export class GraphQLSchemaModule {}
