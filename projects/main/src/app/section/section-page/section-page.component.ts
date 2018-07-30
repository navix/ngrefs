import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ContentPage } from '../../content/meta';
import { VersionPageComponent } from '../../version-page/version-page.component';
import { SectionHolderComponent } from '../section-holder/section-holder.component';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss'],
})
export class SectionPageComponent implements OnInit {
  page?: ContentPage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: any,
    private sectionHolder: SectionHolderComponent,
    private versionComponent: VersionPageComponent,
  ) {
  }

  get showHints() {
    return this.versionComponent.showHints;
  }

  ngOnInit() {
    this.route.params.subscribe(({pageUrl}) => {
      this.page = this.sectionHolder.section.pages.find(p => p.url === pageUrl);
    });
    // Handle anchor scrolling
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.scrollTo();
      }
    });
    this.scrollTo();
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
      this.document.body.scrollTop = 0;
      this.document.documentElement.scrollTop = 0;
    }
  }
}
