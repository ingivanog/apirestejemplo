import { IsNumber, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  name: string;

  @IsString()
  pass: string;
}