import { IsDefined, IsEmail, IsString, Length } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  readonly username: string;

  @IsEmail({}, { message: i18nValidationMessage('validation.INVALID_EMAIL') })
  readonly email: string;

  @IsDefined()
  readonly country: string;

  @IsString()
  readonly password: string;
}
