import { Injectable } from '@angular/core';
import { ContentVersion, VersionDigest } from './content/meta';
import { VersionLoader } from './version/version-loader';

@Injectable({
  providedIn: 'root',
})
export class CrossLinkingService {
  constructor(
    private loader: VersionLoader,
  ) {
  }

  async genCrossVersionsLink(toVersionDigest: VersionDigest, url: {
    sectionUrl?: string,
    pageUrl?: string,
  }): Promise<string[]> {
    const toVersion = await this.loader.load(toVersionDigest.url);
    if (toVersion && url.sectionUrl) {
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
      return ['/', toVersionDigest.url];
    }
  }
}
