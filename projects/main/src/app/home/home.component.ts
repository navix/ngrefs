import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentMessage, ContentMessageRef } from '../content/meta';
import { versions } from '../content/versions';
import { extractMessage } from '../message/extract-message';

@Component({
  selector: 'main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  versions = versions;

  lang: string;

  versionUrl?: string;

  year = (new Date()).getFullYear();

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(({lang, versionUrl}) => {
        this.lang = lang || 'en';
        this.versionUrl = versionUrl;
      });
  }

  extractMessage(messages: ContentMessage[], ref: ContentMessageRef) {
    return extractMessage(messages, ref, 'en');
  }
}
