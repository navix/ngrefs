import { Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { uuid } from '@ngx-kit/core';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { ContentMessageRef } from '../content/meta';
import { VersionPageComponent } from '../version-page/version-page.component';

@Component({
  selector: 'app-content-message',
  templateUrl: './content-message.component.html',
  styleUrls: ['./content-message.component.scss'],
})
export class ContentMessageComponent implements OnInit, OnChanges {
  @Input() ref: ContentMessageRef;

  text: string;

  highlight = false;

  html: SafeHtml;

  links = new Map<string, string>();

  lang: string;

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
    private md: MdRenderService,
    private versionPage: VersionPageComponent,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
  }

  @HostBinding('class.-highlight') get highlightClass() {
    return this.highlight;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.lang !== this.versionPage.lang) {
          this.update();
        }
      }
    });
  }

  ngOnChanges() {
    this.update();
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

  private update() {
    this.lang = this.versionPage.lang;
    if (this.ref.id) {
      const message = this.versionPage.version.messages.find(m => m.id === this.ref.id);
      if (message) {
        const locale = message.locales.find(l => l.lang === this.lang);
        if (locale) {
          this.text = locale.text;
          this.highlight = false;
        } else {
          console.warn(`ContentMessage: Lang "${this.lang}" for Message with id "${this.ref.id}" not found!`);
          this.text = this.ref.id;
          this.highlight = true;
        }
      } else {
        console.warn(`ContentNode: Message with id "${this.ref.id}" not found!`);
        this.text = this.ref.id;
        this.highlight = true;
      }
      const rendered = this.md.render(this.text);
      this.html = this.sanitizer.bypassSecurityTrustHtml(
        rendered.replace(/href\=\"(.*)\"/g, this.hrefReplacer),
      );
    } else if (this.ref.text) {
      this.text = this.ref.text;
      this.html = this.ref.text;
      this.highlight = false;
    } else {
      console.warn(`ContentNode: Invalid ContentMessageRef`);
    }
  }
}
