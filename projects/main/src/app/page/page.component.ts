import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ContentPage, ContentVersion } from '../content/meta';
import { versions } from '../content/versions';
import { CrossLinkingService } from '../cross-linking.service';
import { extractMessage } from '../message/extract-message';
import { SectionComponent } from '../section/section/section.component';
import { SeoService } from '../seo.service';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'main-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
  pageUrl: string;

  page?: ContentPage;

  private destroy = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: any,
    private sectionComponent: SectionComponent,
    private versionComponent: VersionComponent,
    private seo: SeoService,
    private cls: CrossLinkingService,
    private cdr: ChangeDetectorRef,
  ) {
    // Should be handle in the constructor for proper initial rendering
    this.route.params.subscribe(({pageUrl}) => {
      this.versionComponent.currentPageUrl = pageUrl;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(({pageUrl}) => {
      this.pageUrl = pageUrl;
      this.loadPage();
    });
    // Handle anchor scrolling
    this.router.events
      .pipe(takeUntil(this.destroy))
      .subscribe(s => {
        if (s instanceof NavigationEnd) {
          this.loadPage();
          this.scrollTo();
        }
      });
    this.scrollTo();
  }

  ngOnDestroy() {
    this.versionComponent.currentPageUrl = undefined;
    this.destroy.next();
  }

  get section() {
    return this.sectionComponent.section;
  }

  get showHints() {
    return this.sectionComponent.showHints;
  }

  get version() {
    return this.versionComponent.version;
  }

  get defaultVersion(): ContentVersion {
    return versions.find(v => v.default);
  }

  get isForDefaultVersion() {
    return !!this.version.default;
  }

  get defaultVersionLink() {
    return this.cls.genCrossVersionsLink(this.defaultVersion, {
      lang: this.versionComponent.lang,
      sectionUrl: this.section.url,
      pageUrl: this.page.url,
    });
  }

  private loadPage() {
    if (this.pageUrl) {
      this.page = this.sectionComponent.section.pages.find(p => p.url === this.pageUrl);
      if (this.page) {
        const title = extractMessage(this.versionComponent.version.messages, this.page.title, this.versionComponent.lang);
        this.seo.setPage(title);
        this.cdr.detectChanges();
      } else {
        this.router.navigate(['/e404']);
      }
    } else {
      this.router.navigate(['/e404']);
    }
  }

  private scrollTo() {
    const tree = this.router.parseUrl(this.router.url);
    if (tree.fragment) {
      this.zone.onStable
        .pipe(take(1))
        .subscribe(() => {
          const element = this.document.querySelector('#' + decodeURI(tree.fragment));
          if (element) {
            element.scrollIntoView(element);
            element.classList.add('-highlight');
            setTimeout(() => {
              element.classList.remove('-highlight');
            }, 1000);
          }
        });
    } else {
//      this.document.body.scrollTop = 0;
//      this.document.documentElement.scrollTop = 0;
    }
  }
}
