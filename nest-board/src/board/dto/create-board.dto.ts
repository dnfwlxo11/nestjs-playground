import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 500)
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  readonly author: string;

  @IsDateString()
  @IsOptional()
  readonly updateAt: Date;
}
