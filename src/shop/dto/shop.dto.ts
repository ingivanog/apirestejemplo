import { IsNumber, IsString } from "class-validator";

export class ShopDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  status: number;
}