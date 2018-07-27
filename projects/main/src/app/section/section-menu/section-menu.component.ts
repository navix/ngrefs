import { Component, Input, OnInit } from '@angular/core';
import { ContentEntry, ContentMenuItem } from '../../content/meta';
import { SectionHolderComponent } from '../section-holder/section-holder.component';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.scss'],
})
export class SectionMenuComponent implements OnInit {
  @Input() items: ContentMenuItem[];

  constructor(
    private sectionComponent: SectionHolderComponent,
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
}
