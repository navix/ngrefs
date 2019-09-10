import { Injectable } from '@angular/core';
import { ContentVersion } from './content/meta';

@Injectable({
  providedIn: 'root',
})
export class CrossLinkingService {
  genCrossVersionsLink(toVersion: ContentVersion, url: {
    sectionUrl?: string,
    pageUrl?: string,
  }): string[] {
    if (url.sectionUrl) {
      const section = toVersion.sections.find(s => s.url === url.sectionUrl);
      if (section) {
        if (url.pageUrl) {
          const page = section.pages.find(p => p.url === url.pageUrl);
          if (page) {
            return ['/', toVersion.url, section.url, page.url];
          } else {
            return ['/', toVersion.url, section.url, 'intro'];
          }
        } else {
          return ['/', toVersion.url, section.url, 'intro'];
        }
      } else {
        return ['/', toVersion.url];
      }
    } else {
      return ['/', toVersion.url];
    }
  }

  genCrossLangLink(version: ContentVersion, toLang: string, url: {
    sectionUrl?: string,
    pageUrl?: string,
  }) {
    return this.genCrossVersionsLink(version, {
      sectionUrl: url.sectionUrl,
      pageUrl: url.pageUrl,
    });
  }
}
