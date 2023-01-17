import { IsNotEmpty, IsEmail, IsString, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNumberString()
  id: number;
}
