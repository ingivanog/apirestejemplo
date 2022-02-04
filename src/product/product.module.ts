import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { ProductController } from './controller/product/product.controller';
import { ProductService } from './service/product/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductController],
    providers: [ProductService],
  })
export class ProductModule {}
