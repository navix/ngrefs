import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { KitPlatformService } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentSection } from '../../content/meta';
import { SeoService } from '../../seo.service';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit, OnDestroy {
  sectionUrl: string;

  section: ContentSection;

  showHints = true;

  displayNav = false;

  private destroy = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private versionComponent: VersionComponent,
    private seo: SeoService,
    private platform: KitPlatformService,
  ) {
    // Should be handle in the constructor for proper initial rendering
    this.route.params.subscribe(({sectionUrl}) => {
      this.versionComponent.currentSectionUrl = sectionUrl;
    });
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
          this.displayNav = false;
          this.loadSection();
        }
      });
  }

  ngOnDestroy() {
    this.versionComponent.currentSectionUrl = undefined;
    this.destroy.next();
  }

  get version() {
    return this.versionComponent.version;
  }

  get isServer() {
    return this.platform.isServer();
  }

  private loadSection() {
    if (this.version) {
      this.section = Object.values(this.version.sections)
        .find(s => s.url === this.sectionUrl);
      if (this.section) {
        this.seo.setPrefix(this.section.title);
      } else {
        this.router.navigate(['/e404']);
      }
    } else {
      this.router.navigate(['/e404']);
    }
  }
}
