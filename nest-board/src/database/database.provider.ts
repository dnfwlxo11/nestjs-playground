import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from 'src/board/entities/board.entity';

export const databaseProvider = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'daein1234',
  database: 'nest_board',
  entities: [],
  synchronize: true,
});
