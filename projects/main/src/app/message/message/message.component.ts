import { Component, HostBinding, Input, isDevMode, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { uuid } from '@ngx-kit/core';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentMessageRef } from '../../content/meta';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnChanges, OnDestroy {
  @Input() ref: ContentMessageRef;

  text: string;

  highlight = false;

  html: SafeHtml;

  links = new Map<string, string>();

  lang: string;

  private destroy = new Subject<void>();

  constructor(
    private md: MdRenderService,
    private versionPage: VersionComponent,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.destroy))
      .subscribe((event) => {
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

  ngOnDestroy(): void {
    this.destroy.next();
  }

  @HostBinding('class.-highlight') get highlightClass() {
    return this.highlight;
  }

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
  };

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
        if (locale && locale.text && !locale.useSource) {
          this.text = locale.text;
          this.highlight = false;
        } else {
          const enLocal = message.locales.find(l => l.lang === 'en');
          if (enLocal && enLocal.text) {
            this.text = enLocal.text;
          } else {
            this.text = this.ref.id;
            if (isDevMode()) {
              console.warn(`ContentMessage: Lang "en" for Message with id "${this.ref.id}" not found!`);
            }
          }
          if (isDevMode()) {
            this.highlight = locale ? !locale.useSource : true;
          }
        }
      } else {
        if (isDevMode()) {
          console.warn(`ContentNode: Message with id "${this.ref.id}" not found!`);
          this.highlight = true;
        }
        this.text = this.ref.id;
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
