import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopCartEntity } from './entity/shop-cart.entity';
import { ShopCartService } from './service/shop-cart/shop-cart.service';
import { ShopCartController } from './controller/shop-cart/shop-cart.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ShopCartEntity])],
    providers: [ShopCartService],
    controllers: [ShopCartController],
  })
export class ShopCartModule {}
