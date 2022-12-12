import { Controller, Get } from '@nestjs/common';

@Controller('board')
export class BoardController {
  @Get()
  main() {
    return `This page is main page`;
  }
}
