import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BoardController } from './board.controller';
import { BoardProvider } from './board.provider';
import { BoardService } from './board.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, ...BoardProvider],
})
export class BoardModule {}
