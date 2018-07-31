import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ContentTutorialsEntry } from '../../../content/meta';
import { VersionComponent } from '../../../version/version.component';

@Component({
  selector: 'app-page-tutorials-entry',
  templateUrl: './page-tutorials-entry.component.html',
  styleUrls: ['./page-tutorials-entry.component.scss'],
})
export class PageTutorialsEntryComponent implements OnInit, OnChanges {
  @Input() entry: ContentTutorialsEntry;

  display: boolean;

  constructor(
    private versionComponent: VersionComponent,
  ) {
  }

  get lang() {
    return this.versionComponent.lang;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    const hasEn = this.entry.links.find(l => l.lang === 'en');
    const hasCurrent = this.entry.links.find(l => l.lang === this.lang);
    this.display = !!hasEn || !!hasCurrent;
  }
}
