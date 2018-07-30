import { Component, Input, OnInit } from '@angular/core';
import { uiMessages } from '../content/versions';
import { VersionPageComponent } from '../version-page/version-page.component';

@Component({
  selector: 'app-ui-message',
  templateUrl: './ui-message.component.html',
  styleUrls: ['./ui-message.component.scss'],
})
export class UiMessageComponent implements OnInit {
  @Input() id: string;

  constructor(
    private versionComponent: VersionPageComponent,
  ) {
  }

  get text() {
    if (this.id) {
      const message = uiMessages.find(m => m.id === this.id);
      const lang = this.versionComponent.lang;
      if (message.locales[lang]) {
        return message.locales[lang];
      } else {
        console.warn(`UiMessage: locale "${lang}" for message "${this.id}" not found!`);
        return message.locales['en'];
      }
    } else {
      console.warn(`UiMessage: message with id "${this.id}" not found!`);
      return '';
    }
  }

  ngOnInit() {
  }
}
