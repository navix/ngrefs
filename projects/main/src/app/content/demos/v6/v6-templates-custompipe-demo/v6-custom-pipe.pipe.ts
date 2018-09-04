import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'v6CustomPipe'
})
export class V6CustomPipePipe implements PipeTransform {

  transform(value: number, multiplier: number = 2): number {
    return value * multiplier;
  }

}
