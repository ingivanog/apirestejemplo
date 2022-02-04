import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopCartEntity } from 'src/shop-cart/entity/shop-cart.entity';
import { ShopCartDto } from 'src/shop-cart/dto/shop-cart.dto';

@Injectable()
export class ShopCartService {
  constructor(
    @InjectRepository(ShopCartEntity)
    private shopCartRepository: Repository<ShopCartEntity>
  ){}
  
  create(shopCart: ShopCartDto): Promise<ShopCartDto> { 
    return this.shopCartRepository.save(shopCart);
  }

  findAll(): Promise<ShopCartDto[]> {
    return this.shopCartRepository.find();
  }

}