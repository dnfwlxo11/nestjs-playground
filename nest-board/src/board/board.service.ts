import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  private boards: Board[];

  getAll(): Board[] {
    console.log(this.boards);

    return this.boards;
  }

  // return type Board
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
