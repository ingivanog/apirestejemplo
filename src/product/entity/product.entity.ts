import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  stock: number;

  @Column({ name: 'shop_id', nullable: false })
  shopId: number;

}