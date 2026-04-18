import { IsDefined, IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  readonly username: string;

  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string;

  @IsDefined()
  readonly country: string;

  @IsString()
  readonly password: string;
}
