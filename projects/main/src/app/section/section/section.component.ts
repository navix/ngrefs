import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { KitPlatformService } from '@ngx-kit/core';
import { ContentSection } from '../../content/meta';
import { extractMessage } from '../../message/extract-message';
import { SeoService } from '../../seo.service';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit, OnDestroy {
  section: ContentSection;

  showHints = true;

  displayNav = false;

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
      this.section = Object.values(this.version.sections)
        .find(s => s.url === sectionUrl);
      const title = extractMessage(this.version.messages, this.section.title, this.versionComponent.lang);
      this.seo.setPrefix(title);
    });
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.displayNav = false;
      }
    });
  }

  ngOnDestroy() {
    this.versionComponent.currentSectionUrl = undefined;
  }

  get version() {
    return this.versionComponent.version;
  }

  get isServer() {
    return this.platform.isServer();
  }
}
