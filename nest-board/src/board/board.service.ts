import { Injectable } from '@nestjs/common';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  private board: Board;

  getAll(): Board[] {
    console.log(`Return the contents`);

    return [];
  }

  // return type Board
  getOne(contentId: number) {
    return `return the content with id ${contentId}`;
  }

  createContent(contentData) {
    return `create content ${contentData}`;
  }

  deleteOne(contentId: number) {
    return `Delete content with id ${contentId}`;
  }

  patchContent(updateData, contentId: number) {
    return `Patch content with id ${contentId}`;
  }
}
