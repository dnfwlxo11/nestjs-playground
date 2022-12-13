import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardService } from './board.service';
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
    console.log(content);

    return `Get content by id ${contentId}`;
  }

  @Post()
  createContent() {
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
