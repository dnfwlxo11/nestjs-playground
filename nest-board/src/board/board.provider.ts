import { DataSource } from 'typeorm';
import { Board } from './entities/board.entity';

export const BoardProvider = [
  {
    provide: 'BOARD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Board),
    inject: ['DATA_SOURCE'],
  },
];
