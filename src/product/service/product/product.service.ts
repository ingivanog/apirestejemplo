import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/product/dto/product.dto';
import { Repository } from 'typeorm';
import { ProductEntity } from "src/product/entity/product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>
  ){}
  
  create(product: ProductDto): Promise<ProductDto> { 
    return this.productRepository.save(product);
  }

  findAll(): Promise<ProductDto[]> {
    return this.productRepository.find();
  }

}