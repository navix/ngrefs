import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { uuid } from '../../../../../editor/src/app/util/uuid';
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

  html: SafeHtml;

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
  };

  private destroy = new Subject<void>();

  constructor(
    private versionPage: VersionComponent,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.update();
  }

  ngOnDestroy(): void {
    this.destroy.next();
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
    this.text = this.ref;
    const rendered = this.text;
    this.html = this.sanitizer.bypassSecurityTrustHtml(
      rendered.replace(/href\=\"(.*?)\"/g, this.hrefReplacer),
    );
  }
}
