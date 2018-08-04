import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { KitPlatformService } from '@ngx-kit/core';
import { extractMessage } from '../../content-message/extract-message';
import { ContentSection } from '../../content/meta';
import { SeoService } from '../../seo.service';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
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

  get version() {
    return this.versionComponent.version;
  }

  get isServer() {
    return this.platform.isServer();
  }
}
