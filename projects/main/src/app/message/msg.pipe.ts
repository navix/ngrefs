import { Pipe, PipeTransform } from '@angular/core';
import { ContentMessageRef } from '../content/meta';

@Pipe({
  name: 'msg',
  pure: true,
})
export class MsgPipe implements PipeTransform {
  constructor() {
  }

  transform(ref: ContentMessageRef, args?: string[]): any {
    return ref;
  }
}
