import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, NgZone, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ContentMenu, ContentVersion } from '../content/meta';
import { versions } from '../content/versions';
import { SeoService } from '../seo.service';

@Component({
  selector: 'main-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {
  version: ContentVersion;

  lang: string;

  showHints = true;

  currentSectionUrl?: string;

  currentPageUrl?: string;

  private _menu: ContentMenu;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: any,
    private zone: NgZone,
    private app: AppComponent,
    private cdr: ChangeDetectorRef,
    private seo: SeoService,
  ) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log('NAV END EV', e);
      }
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe(({lang, versionUrl}) => {
        this.lang = lang;
        this.seo.setLang(this.lang);
        this.version = versions.find(v => v.url === versionUrl);
        this.seo.setAffix(`${this.version.title} References`);
      });
  }

  get menu() {
    return this._menu;
  }

  set menu(menu: ContentMenu) {
    this._menu = menu;
    this.cdr.detectChanges();
  }
}
