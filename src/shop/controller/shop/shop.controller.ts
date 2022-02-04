import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ShopDto } from 'src/shop/dto/shop.dto';
import { ShopService } from 'src/shop/service/shop/shop.service';

@Controller('shops')
export class ShopController {
  constructor(private shopService: ShopService){}

  @Post('/createShop')
  create(@Body() shop: ShopDto): Promise<ShopDto> {
    return this.shopService.create(shop);
  }

  @Get('/listShop')
  async findAll(): Promise<ShopDto[]> {
    return this.shopService.findAll();
  }
}
