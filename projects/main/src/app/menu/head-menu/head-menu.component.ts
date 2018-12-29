import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentVersion } from '../../content/meta';
import { versions } from '../../content/versions';
import { CrossLinkingService } from '../../cross-linking.service';
import { SectionComponent } from '../../section/section/section.component';
import { ThemeService } from '../../theme.service';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-head-menu',
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadMenuComponent implements OnInit {
  @Input() version: ContentVersion;

  versions = versions;

  showSearch = false;

  constructor(
    public sectionComponent: SectionComponent,
    public versionComponent: VersionComponent,
    public theme: ThemeService,
    private cls: CrossLinkingService,
  ) {
  }

  ngOnInit() {
  }

  get lang() {
    return this.versionComponent.lang;
  }

  genCrossLink(toVersion: ContentVersion) {
    return this.cls.genCrossVersionsLink(toVersion, {
      lang: this.lang,
      sectionUrl: this.versionComponent.currentSectionUrl,
      pageUrl: this.versionComponent.currentPageUrl,
    });
  }
}
