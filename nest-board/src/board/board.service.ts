import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
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

  async patchOne(
    updateData: UpdateBoardDto,
    contentId: number,
  ): Promise<boolean> {
    await this.boardRepository
      .createQueryBuilder()
      .update(Board)
      .set(updateData)
      .where('contentId = :id', { id: contentId })
      .execute();

    return true;
  }

  async deleteOne(contentId: number): Promise<boolean> {
    await this.boardRepository
      .createQueryBuilder()
      .delete()
      .from(Board)
      .where('contentId = :id', { id: contentId })
      .execute();

    return true;
  }
}
