import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ContentVersion } from '../../content/meta';
import { versionsDigest } from '../../content/versionsDigest';
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

  @Output() close = new EventEmitter();

  versions = versionsDigest;

  showSearch = false;

  constructor(
    public sectionComponent: SectionComponent,
    public versionComponent: VersionComponent,
    public theme: ThemeService,
    private cls: CrossLinkingService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  async moveTo(toId: string) {
    const version = versionsDigest.find(v => v.id === toId);
    const link = await this.cls.genCrossVersionsLink(version, {
      sectionUrl: this.versionComponent.currentSectionUrl,
      pageUrl: this.versionComponent.currentPageUrl,
    });
    this.router.navigate(link);
  }
}
