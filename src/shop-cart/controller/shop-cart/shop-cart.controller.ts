import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ShopCartDto } from 'src/shop-cart/dto/shop-cart.dto';
import { ShopCartService } from 'src/shop-cart/service/shop-cart/shop-cart.service';

@Controller('shopCarts')
export class ShopCartController {
  constructor(private shopCartService: ShopCartService){}

  @Post('/createNewShopCart')
  create(@Body() product: ShopCartDto): Promise<ShopCartDto> {
    return this.shopCartService.create(product);
  }

  @Get('/listShopCarts')
  async findAll(): Promise<ShopCartDto[]> {
    return this.shopCartService.findAll();
  }
}

