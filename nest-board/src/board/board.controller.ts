import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptions/success.interceptor';
import { PipeExample } from 'src/common/pipes/pipeExample.pipe';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Controller('board')
@UseInterceptors(SuccessInterceptor)
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async getAll(): Promise<Board[]> {
    const contents = await this.boardService.getAll();

    return contents;
  }

  @Get(':id')
  getOne(@Param('id', PipeExample) contentId: number) {
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
    @Param('id', PipeExample) contentId: number,
  ) {
    await this.boardService.patchOne(updateData, contentId);

    return `Content updated by id ${contentId}`;
  }

  @Delete(':id')
  async deleteContent(@Param('id', PipeExample) contentId: number) {
    await this.boardService.deleteOne(contentId);

    return `Delete content by id ${contentId}`;
  }
}
