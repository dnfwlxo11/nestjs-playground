import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  private boards: Board[];

  async getAll(): Promise<Board[]> {
    // const datas = await this.boardRepository.query('SELECT * FROM board');
    const datas = await this.boardRepository
      .createQueryBuilder()
      .select('*')
      .getRawMany();

    console.log(datas, 'datas');

    return datas;
  }

  async getOne(contentId: number): Promise<Board> {
    const contents = await this.getAll();

    if (!contents.length) {
      throw new NotFoundException(`Movie with ID ${contentId} not found.`);
    }

    const content = await this.boardRepository
      .createQueryBuilder()
      .select('*')
      .where('contentId = :id', { id: contentId })
      .getRawOne();

    return content;
  }

  async createContent(boardData: CreateBoardDto) {
    console.log(boardData);
    console.log('create content');

    const result = await this.boardRepository
      .createQueryBuilder()
      .insert()
      .into(Board)
      .values([boardData])
      .execute();

    // this.boards.push(boardData);

    return result;
  }

  deleteOne(contentId: number) {
    const content = this.getOne(contentId);

    this.boards = this.boards.filter(
      (content) => content.contentId !== contentId,
    );

    return `Delete content with id ${contentId}`;
  }

  patchContent(updateData: CreateBoardDto, contentId: number): boolean {
    const content = this.getOne(contentId);

    this.deleteOne(contentId);
    this.createContent(updateData);

    return true;
  }
}
