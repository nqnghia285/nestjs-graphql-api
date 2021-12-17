import { Module } from '@nestjs/common'
import {
   CommentModule,
   CustomerModule,
   DiscountModule,
   LaptopModule,
   PassageModule,
   PersonModule,
   PostModule,
   PriceMapModule,
   PurchaseModule,
   UserModule,
} from './models'

@Module({
   imports: [
      CommentModule,
      CustomerModule,
      DiscountModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      UserModule,
   ],
   exports: [
      CommentModule,
      CustomerModule,
      DiscountModule,
      LaptopModule,
      PassageModule,
      PersonModule,
      PostModule,
      PriceMapModule,
      PurchaseModule,
      UserModule,
   ],
})
export class GraphQLModules {}
