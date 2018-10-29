import { Injectable } from '@angular/core';
import { ContentVersion } from './content/meta';

@Injectable({
  providedIn: 'root',
})
export class CrossLinkingService {
  genCrossVersionsLink(toVersion: ContentVersion, url: {
    lang?: string,
    sectionUrl?: string,
    pageUrl?: string,
  }): string[] {
    const lang = url.lang || 'en';
    if (url.sectionUrl) {
      const section = toVersion.sections.find(s => s.url === url.sectionUrl);
      if (section && section.langs && !!section.langs[lang]) {
        if (url.pageUrl) {
          const page = section.pages.find(p => p.url === url.pageUrl);
          if (page) {
            return ['/', lang, toVersion.url, section.url, page.url];
          } else {
            return ['/', lang, toVersion.url, section.url, 'intro'];
          }
        } else {
          return ['/', lang, toVersion.url, section.url, 'intro'];
        }
      } else {
        return ['/', lang, toVersion.url];
      }
    } else {
      return ['/', lang, toVersion.url];
    }
  }

  genCrossLangLink(version: ContentVersion, toLang: string, url: {
    sectionUrl?: string,
    pageUrl?: string,
  }) {
    return this.genCrossVersionsLink(version, {
      lang: toLang,
      sectionUrl: url.sectionUrl,
      pageUrl: url.pageUrl,
    });
  }
}
