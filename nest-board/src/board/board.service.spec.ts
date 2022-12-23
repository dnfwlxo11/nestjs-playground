import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';

const mockRepository = () => ({
  createQueryBuilder: jest.fn().mockReturnValue({
    getAll: jest.fn().mockReturnThis(),
    getOne: jest.fn().mockReturnThis(),
    createContent: jest.fn(),
    patchOne: jest.fn(),
    deleteOne: jest.fn(),
  }),
});
type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('BoardService', () => {
  let boardService: BoardService;
  let boardRepository: MockRepository<Board>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardService,
        {
          provide: getRepositoryToken(Board),
          useValue: mockRepository(),
        },
      ],
    }).compile();

    boardService = module.get<BoardService>(BoardService);
    boardRepository = module.get<MockRepository<Board>>(
      getRepositoryToken(Board),
    );
  });

  it('should be defined', () => {
    expect(boardService).toBeDefined();
  });

  // describe('queryBuilder', () => {
  //   describe('getAll', () => {
  //     it('should return an array of boards', async () => {
  //       jest
  //         .spyOn(boardRepository.createQueryBuilder(), 'getAll')
  //         .mockResolvedValue([]);

  //       const result = await boardService.getAll();

  //       expect(boardRepository.createQueryBuilder().getAll).toHaveBeenCalled();
  //       expect(result).toBeInstanceOf(Array);
  //     });
  //   });
  // });
});
