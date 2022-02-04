import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shopCart')
export class ShopCartEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 999, nullable: false })
  jsonProducts: string;

  @Column({ nullable: false })
  status: number;

}