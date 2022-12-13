import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BoardModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
