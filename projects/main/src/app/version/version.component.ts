import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, NgZone, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ContentMenu, ContentVersion } from '../content/meta';
import { SeoService } from '../seo.service';

@Component({
  selector: 'main-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {
  version: ContentVersion;

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
  }

  ngOnInit() {
    this.route.data
      .subscribe(({version}: {version: ContentVersion}) => {
        this.version = version;
        if (!this.version) {
          this.router.navigate(['/e404']);
        }
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
