import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ProductDto } from 'src/product/dto/product.dto';
import { ProductService } from 'src/product/service/product/product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService){}

  @Post('/createProduct')
  create(@Body() product: ProductDto): Promise<ProductDto> {
    return this.productService.create(product);
  }

  @Get('/listProducts')
  async findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
  }
}

