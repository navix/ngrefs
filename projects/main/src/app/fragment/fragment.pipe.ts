import { Pipe, PipeTransform } from '@angular/core';
import { sanitizeFragment } from './sinitize-fragment';

@Pipe({
  name: 'fragment',
  pure: true,
})
export class FragmentPipe implements PipeTransform {
  transform(value: string): string {
    return value ? sanitizeFragment(value) : '';
  }
}
