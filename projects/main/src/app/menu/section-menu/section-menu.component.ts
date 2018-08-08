import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentEntry, ContentMenuItem } from '../../content/meta';
import { SectionComponent } from '../../section/section/section.component';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.scss'],
})
export class SectionMenuComponent implements OnInit {
  @Input() items: ContentMenuItem[];

  constructor(
    private sectionComponent: SectionComponent,
    private versionComponent: VersionComponent,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
  }

  getPageEntries(usePageUrl: string): ContentEntry[] {
    const page = this.sectionComponent.section.pages.find(p => p.url === usePageUrl);
    return page
      ? page.entries
      : [];
  }

  isLinkActive(url: any[], exact = false): boolean {
    return this.router.isActive(this.router.createUrlTree(url, {relativeTo: this.route}), exact);
  }
}
