import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 500)
  @ApiProperty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  @ApiProperty()
  readonly author: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty()
  readonly updateAt: Date;
}
