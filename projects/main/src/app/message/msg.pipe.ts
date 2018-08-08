import { Pipe, PipeTransform } from '@angular/core';
import { ContentMessageRef } from '../content/meta';
import { VersionComponent } from '../version/version/version.component';
import { extractMessage } from './extract-message';

@Pipe({
  name: 'msg',
  pure: true,
})
export class MsgPipe implements PipeTransform {
  constructor(
    private versionComponent: VersionComponent,
  ) {
  }

  transform(ref: ContentMessageRef, args: string[]): any {
    if (ref.text) {
      return ref.text;
    } else {
      // @todo missing warnings
      return extractMessage(this.versionComponent.version.messages, ref, this.versionComponent.lang);
    }
  }
}
