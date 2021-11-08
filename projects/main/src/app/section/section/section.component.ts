import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Content } from '../../content/content';
import { Content2Section } from '../../content/meta2';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'main-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit, OnDestroy {
  sectionUrl: string;

  section: Content2Section;

  showHints = true;

  displayNav = false;

  private destroy = new Subject<void>();

  constructor(
    private content: Content,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService,
    private platform: Platform,
    @Inject(DOCUMENT) document: any,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({sectionUrl}) => {
      this.sectionUrl = sectionUrl;
      this.loadSection();
    });
    this.router.events
      .pipe(takeUntil(this.destroy))
      .subscribe(e => {
        if (e instanceof NavigationEnd) {
          this.toggleNav(false);
          this.loadSection();
        }
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  get isServer() {
    return !this.platform.isBrowser;
  }

  // @todo rm
  toggleNav(state?: boolean) {
    this.displayNav = state === undefined ? !this.displayNav : state;
    if (this.displayNav) {
      this.renderer.addClass(document.body, '-mobile-scroll-block');
    } else {
      this.renderer.removeClass(document.body, '-mobile-scroll-block');
    }
  }

  private loadSection() {
    this.section = this.content.sections.find(s => s.url === this.sectionUrl);
    if (this.section) {
      this.seo.setPrefix(this.section.title);
    } else {
      this.router.navigate(['/e404']);
    }
  }
}
