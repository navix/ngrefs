import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, NgZone, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { uuid } from '@ngx-kit/core';
import { take } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { versions } from '../content/versions';
import { ContentItem, ContentVersion } from '../meta';

@Component({
  selector: 'app-version-page',
  templateUrl: './version-page.component.html',
  styleUrls: ['./version-page.component.scss'],
})
export class VersionPageComponent implements OnInit {

  content: ContentVersion;

  item: ContentItem;

  body: SafeHtml;

  toc: SafeHtml;

  stickyToc = false;

  links = new Map<string, string>();

  hrefReplacer = (str: any, href: any, offset: any, s: any): string => {
    if (href[0] === '.' || href[0] === '#') {
      // Mark link as router-handled
      const chunks = href.split('#');
      const compiledHref = decodeURI(this.router.createUrlTree(
        [chunks[0] || './'],
        {relativeTo: this.route, fragment: chunks[1]},
      ) as any);
      const id = uuid();
      this.links.set(id, compiledHref);
      return `router-link="${id}" href="${compiledHref}"`;
    } else {
      return `${str} target="_blank"`;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: any,
    private zone: NgZone,
    private app: AppComponent,
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(({lang, version, url}) => {
        console.log('VRS RTNG', lang, version, url);
        const index = versions.findIndex(v => v.index.ver === version && v.index.lang === lang);
        this.content = versions[index];
        this.app.currentVersionId = index;
        this.item = this.getItemByUrl(url);
        this.body = this.sanitizer.bypassSecurityTrustHtml(
          this.item.body.replace(/href\=\"(.*)\"/g, this.hrefReplacer),
        );
        this.toc = this.item.toc
          ? this.sanitizer.bypassSecurityTrustHtml(this.item.tocBody.replace(/href\=\"(.*)\"/g, this.hrefReplacer))
          : null;
      });
    // Handle anchor scrolling
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.scrollTo();
      }
    });
    this.scrollTo();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = this.document.documentElement.scrollTop;
    this.stickyToc = windowScroll > 128;
  }

  clickHandler(event: any) {
    const path = event.path || (event.composedPath && event.composedPath());
    const a = path.find(n => n.nodeName === 'A');
    if (a) {
      const routerLink = a.getAttribute('router-link');
      if (routerLink) {
        this.router.navigateByUrl(this.links.get(routerLink));
        event.preventDefault();
      }
    }
  }

  private getItemByUrl(url: string): ContentItem {
    if (this.content) {
      const search = (content: ContentItem[]) => {
        for (const item of content) {
          if (item.url === url) {
            return item;
          }
          if (item.children) {
            const inChild = search(item.children);
            if (inChild) {
              return inChild;
            }
          }
        }
      };
      return search(this.content.index.content);
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
      this.document.body.scrollTop = 0;
      this.document.documentElement.scrollTop = 0;
    }

  }
}
