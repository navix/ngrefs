import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() close = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
}
