import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async getAll(): Promise<Board[]> {
    const contents = await this.boardService.getAll();
    console.log(contents, 'contents');

    return contents;
  }

  @Get(':id')
  getOne(@Param('id') contentId: number) {
    const content = this.boardService.getOne(contentId);

    return content;
  }

  @Post()
  async createContent(@Body() createData: CreateBoardDto) {
    await this.boardService.createContent(createData);

    return `Content created`;
  }

  @Patch(':id')
  async patchContent(
    @Body() updateData: UpdateBoardDto,
    @Param('id') contentId: number,
  ) {
    await this.boardService.patchOne(updateData, contentId);

    return `Content updated by id ${contentId}`;
  }

  @Delete(':id')
  async deleteContent(@Param('id') contentId: number) {
    await this.boardService.deleteOne(contentId);

    return `Delete content by id ${contentId}`;
  }
}
