import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { ActivatedRoute, Router } from '@angular/router';
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

  hrefReplacer = (str: any, href: any, offset: any, s: any): string => {
    if (href[0] === '#') {
      // Add url before '#" for proper local handling
      return `href="${this.router.url.split('#')[0]}${href}"`;
    } else if (href[0] === '.') {
      // Mark link as router-handled
      return `router-link="${href}" href="${this.router.createUrlTree([href], {relativeTo: this.route})}"`;
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
        this.router.navigate([routerLink], {relativeTo: this.route});
        event.preventDefault();
      }
    }
  }
}
