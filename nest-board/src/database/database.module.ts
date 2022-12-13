import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';

@Module({
  exports: [databaseProvider],
})
export class DatabaseModule {}
