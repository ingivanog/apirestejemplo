import { IsNumber, IsString } from "class-validator";

export class ShopCartDto {
  @IsNumber()
  id: number;

  @IsString()
  jsonProducts: string;

  @IsNumber()
  status: number;
}