import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';
export class CreateRegisterDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;
  @IsNotEmpty()
  @IsString()
  site: string;
  @IsString()
  phone: string;
}
