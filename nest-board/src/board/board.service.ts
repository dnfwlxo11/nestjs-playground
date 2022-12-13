import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @Inject('BOARD_REPOSITORY')
    private boardRepository: Repository<Board>,
  ) {}

  private boards: Board[];

  async getAll(): Promise<Board[]> {
    console.log(this.boardRepository);
    const datas = await this.boardRepository.find();

    console.log(datas, 'datas');

    return datas;
  }

  getOne(contentId: number): Board {
    const content = this.boards.find(
      (content) => content.contentId === contentId,
    );

    if (!content) {
      throw new NotFoundException(`Movie with ID ${contentId} not found.`);
    }

    return content;
  }

  createContent(boardData: CreateBoardDto): boolean {
    boardData.contentId = this.boards.length + 1;
    this.boards.push(boardData);

    return true;
  }

  deleteOne(contentId: number) {
    const content = this.getOne(contentId);

    this.boards = this.boards.filter(
      (content) => content.contentId !== contentId,
    );

    return `Delete content with id ${contentId}`;
  }

  patchContent(updateData: CreateBoardDto, contentId: number): Board {
    const content = this.getOne(contentId);

    this.deleteOne(contentId);
    this.createContent(updateData);

    return content;
  }
}
