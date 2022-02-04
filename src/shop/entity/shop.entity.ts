import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shops')
export class ShopEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  status: number;
}