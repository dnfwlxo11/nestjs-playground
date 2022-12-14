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

  @Patch()
  patchContent() {
    return `Content updated`;
  }

  @Delete(':id')
  deleteContent(@Param('id') contentId: number) {
    return `Delete content by id ${contentId}`;
  }
}
