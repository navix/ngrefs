import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Content } from '../../content/content';
import { Content2Section } from '../../content/meta2';

@Component({
  selector: 'header[section]',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  @Input() currentSection: Content2Section;

  @HostBinding('style.--section-color') get sectionColorBinding() {
    return this.currentSection.color;
  }

  constructor(
    public content: Content,
  ) {
  }
}
