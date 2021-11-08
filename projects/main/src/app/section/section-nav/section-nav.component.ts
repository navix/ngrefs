import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Content2Section } from '../../content/meta2';

@Component({
  selector: 'nav[section]',
  templateUrl: './section-nav.component.html',
  styleUrls: ['./section-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionNavComponent implements OnChanges {
  @Input() section!: Content2Section;

  pagesUrls: {[key: string]: string} = {};

  ngOnChanges(changes: SimpleChanges) {
    console.log('PGS', this.section.pages);
    this.pagesUrls = {};
    for (const page of this.section.pages) {
      this.pagesUrls[page.file] = page.url;
    }
    console.log('P_URLS', this.pagesUrls);
  }
}
