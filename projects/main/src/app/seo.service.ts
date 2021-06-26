import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private affix = '🍀 Angular References';

  private prefix = '';

  private page = '';

  private keywords = ['angular', 'angular 2', 'angularjs', 'references', 'web', 'typescript', 'javascript', 'web-framework'];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: any,
  ) {
    this.compileMeta();
  }

  setAffix(value: string) {
    this.affix = value;
    this.compileMeta();
  }

  setPrefix(value: string) {
    this.prefix = value;
    this.compileMeta();
  }

  setPage(value: string) {
    this.page = value;
    this.compileMeta();
  }

  setLang(lang: string) {
    if (this.document && this.document.documentElement && this.document.documentElement.setAttribute) {
      this.document.documentElement.setAttribute('lang', lang);
    }
  }

  private compileMeta() {
    this.title.setTitle(this.page ? `${this.prefix}: ${this.page} | ${this.affix}` : this.affix);
    this.meta.updateTag({
      name: 'keywords',
      content: [...this.keywords, this.prefix, this.page].filter(k => !!k).join(', '),
    });
    // clean up rel=canonical
    this.document?.head
      ?.querySelectorAll('link[rel="canonical"]')
      .forEach(e => e.parentNode.removeChild(e));
  }
}
