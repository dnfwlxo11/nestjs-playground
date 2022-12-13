import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class databaseProvider {
  private database;
  private provide: string;

  constructor() {
    this.database = async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'daein1234',
        synchronize: true,
      });

      return dataSource.initialize();
    };
  }
}
