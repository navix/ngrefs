import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #storeKey = 'theme';

  private _theme;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private platform: Platform,
  ) {
    this.theme = (this.platform.isBrowser && localStorage.getItem(this.#storeKey)) ?? 'main';
  }

  get theme() {
    return this._theme;
  }

  set theme(theme: string) {
    if (this.platform.isBrowser && this.document && this.document.documentElement) {
      localStorage.setItem(this.#storeKey, theme);
      if (this._theme) {
        this.document.documentElement.classList.remove(`theme-${this._theme}`);
      }
      if (theme) {
        this.document.documentElement.classList.add(`theme-${theme}`);
        this._theme = theme;
      }
    }
  }
}
