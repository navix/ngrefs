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
    return this.versionComponent.messageByRef(ref);
  }
}
