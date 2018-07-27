import { Pipe, PipeTransform } from '@angular/core';
import { ContentMessageRef } from '../../../../main/src/app/content/meta';
import { VersionComponent } from '../version/version/version.component';

@Pipe({
  name: 'message',
  pure: false,
})
export class MessagePipe implements PipeTransform {

  constructor(private versionComponent: VersionComponent) {
  }

  transform(ref: ContentMessageRef, args?: any): any {
    if (ref && ref.id) {
      const message = this.versionComponent.version.messages
        .find(m => m.id === ref.id);
      if (message && message.locales[0]) {
        return message.locales[0].text;
      }
    }
  }
}
