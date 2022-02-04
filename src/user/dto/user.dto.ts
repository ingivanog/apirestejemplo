import { IsNumber, IsString } from "class-validator";

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  pass: string;

  @IsNumber()
  status: number;

  @IsNumber()
  permission: number;
}