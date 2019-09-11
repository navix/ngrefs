import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br',
})
export class Nl2brPipe implements PipeTransform {

  static replace(text: string): string {
    return typeof text === 'string' ? text.replace(/\n/g, '<br>') : '';
  }

  transform(text: string): string {
    return Nl2brPipe.replace(text);
  }
}
