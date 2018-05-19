import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { versions } from '../content/versions';
import { ContentItem, ContentVersion } from '../meta';

@Component({
  selector: 'app-version-page',
  templateUrl: './version-page.component.html',
  styleUrls: ['./version-page.component.scss'],
})
export class VersionPageComponent implements OnInit {

  content: ContentVersion;
  cv: boolean = false;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(({lang, version}) => {
        this.content = versions.find(v => v.index.ver === version && v.index.lang === lang);
      });
  }

  getItemByUrl(url: string): ContentItem {
    if (this.content) {
      const search = (content: ContentItem[]) => {
        for (const item of content) {
          if (item.url === url) {
            return item;
          }
          if (item.children) {
            const inChild = search(item.children);
            if (inChild) {
              return inChild;
            }
          }
        }
      };
      return search(this.content.index.content);
    }
  }
}
