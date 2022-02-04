import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopDto } from 'src/shop/dto/shop.dto';
import { Repository } from 'typeorm';
import { ShopEntity } from 'src/shop/entity/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopEntity)
    private shopRepository: Repository<ShopEntity>
  ){}
  
  create(shop: ShopDto): Promise<ShopDto> { 
    return this.shopRepository.save(shop);
  }

  findAll(): Promise<ShopDto[]> {
    return this.shopRepository.find();
  }

}