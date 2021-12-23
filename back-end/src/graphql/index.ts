import { Module } from '@nestjs/common'
import {
   CommentModule,
   CustomerModule,
   DiscountModule,
   ImageModule,
   LaptopModule,
   PassageModule,
   PersonModule,
   PostModule,
   PriceMapModule,
   PurchaseModule,
   UserModule,
   VideoModule,
} from './models'
import { ScalarTypeModule } from './typedefs'

@Module({
   imports: [
      ScalarTypeModule,
      CommentModule,
      CustomerModule,
      DiscountModule,
      ImageModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      UserModule,
      VideoModule,
   ],
   exports: [
      ScalarTypeModule,
      CommentModule,
      CustomerModule,
      DiscountModule,
      ImageModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      UserModule,
      VideoModule,
   ],
})
export class GraphQLModules {}
