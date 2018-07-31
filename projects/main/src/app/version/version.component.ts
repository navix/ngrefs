import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, NgZone, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ContentMenu, ContentVersion } from '../content/meta';
import { versions } from '../content/versions';

@Component({
  selector: 'main-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {
  version: ContentVersion;

  lang: string;

  showHints = true;

  private _menu: ContentMenu;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: any,
    private zone: NgZone,
    private app: AppComponent,
    private cdr: ChangeDetectorRef,
  ) {
  }

  get menu() {
    return this._menu;
  }

//  hrefReplacer = (str: any, href: any, offset: any, s: any): string => {
//    if (href[0] === '.' || href[0] === '#') {
//      // Mark link as router-handled
//      const chunks = href.split('#');
//      const compiledHref = decodeURI(this.router.createUrlTree(
//        [chunks[0] || './'],
//        {relativeTo: this.route, fragment: chunks[1]},
//      ) as any);
//      const id = uuid();
//      this.links.set(id, compiledHref);
//      return `router-link="${id}" href="${compiledHref}"`;
//    } else {
//      return `${str} target="_blank"`;
//    }
//  }

  set menu(menu: ContentMenu) {
    this._menu = menu;
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.route.params
      .subscribe(({lang, versionUrl}) => {
        this.lang = lang;
        this.version = versions.find(v => v.url === versionUrl);
      });
//    this.route.params
//      .subscribe(({lang, version, url}) => {
//        console.log('VRS RTNG', lang, version, url);
//        const index = versions.findIndex(v => v.index.ver === version && v.index.lang === lang);
//        this.content = versions[index];
//        this.app.currentVersionId = index;
//        this.item = this.getItemByUrl(url);
//        this.body = this.sanitizer.bypassSecurityTrustHtml(
//          this.item.body.replace(/href\=\"(.*)\"/g, this.hrefReplacer),
//        );
//        this.toc = this.item.toc
//          ? this.sanitizer.bypassSecurityTrustHtml(this.item.tocBody.replace(/href\=\"(.*)\"/g, this.hrefReplacer))
//          : null;
//      });
//    // Handle anchor scrolling
//    this.router.events.subscribe(s => {
//      if (s instanceof NavigationEnd) {
//        this.scrollTo();
//      }
//    });
//    this.scrollTo();
  }

//  @HostListener('window:scroll', [])
//  onWindowScroll() {
//    const windowScroll = this.document.documentElement.scrollTop;
//    this.stickyToc = windowScroll > 128;
//  }
//
//  clickHandler(event: any) {
//    const path = event.path || (event.composedPath && event.composedPath());
//    const a = path.find(n => n.nodeName === 'A');
//    if (a) {
//      const routerLink = a.getAttribute('router-link');
//      if (routerLink) {
//        this.router.navigateByUrl(this.links.get(routerLink));
//        event.preventDefault();
//      }
//    }
//  }
//
//  private getItemByUrl(url: string): ContentItem {
//    if (this.content) {
//      const search = (content: ContentItem[]) => {
//        for (const item of content) {
//          if (item.url === url) {
//            return item;
//          }
//          if (item.children) {
//            const inChild = search(item.children);
//            if (inChild) {
//              return inChild;
//            }
//          }
//        }
//      };
//      return search(this.content.index.content);
//    }
//  }
//
//  private scrollTo() {
//    const tree = this.router.parseUrl(this.router.url);
//    if (tree.fragment) {
//      this.zone.onStable
//        .pipe(take(1))
//        .subscribe(() => {
//          const element = this.document.querySelector('#' + decodeURI(tree.fragment));
//          if (element) {
//            element.scrollIntoView(element);
//            element.classList.add('-highlight');
//            setTimeout(() => {
//              element.classList.remove('-highlight');
//            }, 1000);
//          }
//        });
//    } else {
//      this.document.body.scrollTop = 0;
//      this.document.documentElement.scrollTop = 0;
//    }
//
//  }
}
