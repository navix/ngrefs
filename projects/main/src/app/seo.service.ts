import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private affix = 'Angular References';

  private prefix = '';

  private page = '';

  constructor(
    private title: Title,
    private router: Router,
  ) {
    this.compileTitle();
  }

  setAffix(value: string) {
    this.affix = value;
    this.compileTitle();
  }

  setPrefix(value: string) {
    this.prefix = value;
    this.compileTitle();
  }

  setPage(value: string) {
    this.page = value;
    this.compileTitle();
  }

  private compileTitle() {
    this.title.setTitle(this.page ? `${this.prefix}: ${this.page} — ${this.affix}` : this.affix);
  }
}
