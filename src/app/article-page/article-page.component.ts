import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, NgZone, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { ActivatedRoute, NavigationEnd, Router, UrlTree } from '@angular/router';
import { uuid } from '@ngx-kit/core';
import { take } from 'rxjs/operators';
import { ContentItem } from '../meta';
import { VersionPageComponent } from '../version-page/version-page.component';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent implements OnInit {
  item: ContentItem;

  body: SafeHtml;

  toc: SafeHtml;

  stickyToc = false;

  links = new Map<string, UrlTree>();

  hrefReplacer = (str: any, href: any, offset: any, s: any): string => {
    if (href[0] === '.' || href[0] === '#') {
      // Mark link as router-handled
      const chunks = href.split('#');
      const compiledHref = this.router.createUrlTree(
        [chunks[0] || './'],
        {relativeTo: this.route, fragment: chunks[1]},
      );
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
    private parent: VersionPageComponent,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: any,
    private zone: NgZone,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({url}) => {
      this.item = this.parent.getItemByUrl(url);
      this.body = this.sanitizer.bypassSecurityTrustHtml(
        this.item.body.replace(/href\=\"(.*)\"/g, this.hrefReplacer),
      );
      this.toc = this.item.toc
        ? this.sanitizer.bypassSecurityTrustHtml(this.item.tocBody.replace(/href\=\"(.*)\"/g, this.hrefReplacer))
        : null;
    });
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          this.scrollTo(tree.fragment);
        }
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = this.document.documentElement.scrollTop;
    this.stickyToc = windowScroll > 100;
  }

  clickHandler(event: any) {
    const a = event.path.find(n => n.nodeName === 'A');
    if (a) {
      const routerLink = a.getAttribute('router-link');
      if (routerLink) {
        this.router.navigateByUrl(this.links.get(routerLink));
        event.preventDefault();
      }
    }
  }

  private scrollTo(fragment: string) {
    this.zone.onStable
      .pipe(take(1))
      .subscribe(() => {
        const element = this.document.querySelector('#' + fragment);
        if (element) {
          element.scrollIntoView(element);
          element.classList.add('-highlight');
          setTimeout(() => {
            element.classList.remove('-highlight');
          }, 1000);
        }
      });
  }
}
