import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PipeExample implements PipeTransform {
  transform(value: number) {
    console.log(`${value} convert to ${Math.ceil(Math.abs(Number(value)))}`);
    return Math.ceil(Math.abs(Number(value)));
  }
}
