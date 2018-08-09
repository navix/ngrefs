import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentVersion } from '../../content/meta';
import { SectionComponent } from '../../section/section/section.component';

@Component({
  selector: 'main-head-menu',
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadMenuComponent implements OnInit {
  @Input() version: ContentVersion;

  showSearch = false;

  constructor(
    public sectionComponent: SectionComponent,
  ) {
  }

  ngOnInit() {
  }

}
