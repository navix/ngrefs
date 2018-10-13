import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ContentPage } from '../content/meta';
import { extractMessage } from '../message/extract-message';
import { SectionComponent } from '../section/section/section.component';
import { SeoService } from '../seo.service';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'main-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  pageUrl: string;

  page?: ContentPage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: any,
    private sectionComponent: SectionComponent,
    private versionComponent: VersionComponent,
    private seo: SeoService,
  ) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(() => {
      this.loadPage();
    });
    this.route.params.subscribe(({pageUrl}) => {
      this.pageUrl = pageUrl;
      this.loadPage();
    });
    // Handle anchor scrolling
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.scrollTo();
      }
    });
    this.scrollTo();
  }

  get section() {
    return this.sectionComponent.section;
  }

  get showHints() {
    return this.sectionComponent.showHints;
  }

  private loadPage() {
    if (this.pageUrl) {
      this.page = this.sectionComponent.section.pages.find(p => p.url === this.pageUrl);
      if (this.page) {
        const title = extractMessage(this.versionComponent.version.messages, this.page.title, this.versionComponent.lang);
        this.seo.setPage(title);
      }
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
