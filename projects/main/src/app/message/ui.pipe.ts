import { Optional, Pipe, PipeTransform } from '@angular/core';
import { uiMessages } from '../content/versions';
import { VersionComponent } from '../version/version.component';

@Pipe({
  name: 'ui',
  pure: true,
})
export class UiPipe implements PipeTransform {
  constructor(
    @Optional() private versionComponent: VersionComponent,
  ) {
  }

  transform(id: string, args: string[]): any {
    const message = uiMessages.find(m => m.id === id);
    const lang = this.versionComponent ? this.versionComponent.lang : 'en';
    if (message.locales[lang]) {
      return message.locales[lang];
    } else {
      console.warn(`UiMessage: locale "${lang}" for message "${id}" not found!`);
      return message.locales['en'];
    }
  }
}
