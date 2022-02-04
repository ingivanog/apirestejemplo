import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from './controller/shop/shop.controller';
import { ShopEntity } from './entity/shop.entity';
import { ShopService } from './service/shop/shop.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  controllers: [ShopController],
  providers: [ShopService]
})
export class ShopModule {}
