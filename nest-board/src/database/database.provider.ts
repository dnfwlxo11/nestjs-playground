import { TypeOrmModule } from '@nestjs/typeorm';

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
