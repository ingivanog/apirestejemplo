import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { ProductModule } from './product/product.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, TypeOrmModule.forRoot(), ShopModule, ShopCartModule, ProductModule],
})
export class AppModule {}
