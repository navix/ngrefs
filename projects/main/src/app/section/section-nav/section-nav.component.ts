import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentSection, ContentVersion } from '../../content/meta';

@Component({
  selector: 'main-section-nav',
  templateUrl: './section-nav.component.html',
  styleUrls: ['./section-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionNavComponent implements OnInit {
  @Input() version: ContentVersion;

  @Input() section: ContentSection;

  constructor() {
  }

  ngOnInit() {
  }

}
