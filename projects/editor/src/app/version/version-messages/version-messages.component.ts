import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentMessage } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'editor-version-messages',
  templateUrl: './version-messages.component.html',
  styleUrls: ['./version-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionMessagesComponent implements OnInit {
  readonly source = 'en';

  toLang: string;

  constructor(
    private versionComponent: VersionComponent,
    private data: DataService,
    private router: Router,
  ) {
  }

  get messages() {
    return this.versionComponent.version.messages;
  }

  get langs() {
    return this.versionComponent.version.langs
      .filter(l => l !== this.source);
  }

  ngOnInit() {
  }

  pickLocale(message: ContentMessage, lang: string) {
    if (message) {
      return message.locales.find(l => l.lang === lang);
    }
  }

  find(id: number) {
    const path = this.data.findMessagePath(id);
    if (path) {
      this.router.navigate(path);
    } else {
      alert('Message path not found');
    }
  }
}
