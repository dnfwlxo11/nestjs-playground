import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAll() {
    const contents = this.boardService.getAll();
    console.log(contents);

    return `Get all board data`;
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
