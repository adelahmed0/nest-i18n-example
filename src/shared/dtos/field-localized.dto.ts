import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class FieldLocalizedDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toString().trim())
  ar: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toString().trim())
  en: string;
}
