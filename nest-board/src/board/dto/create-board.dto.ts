import { IsNumber, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsNumber()
  contentId: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  author: string;

  @IsString()
  date: string;
}
