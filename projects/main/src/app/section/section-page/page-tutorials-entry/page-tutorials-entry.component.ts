import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ContentTutorialsEntry } from '../../../content/meta';
import { VersionPageComponent } from '../../../version-page/version-page.component';

@Component({
  selector: 'app-page-tutorials-entry',
  templateUrl: './page-tutorials-entry.component.html',
  styleUrls: ['./page-tutorials-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTutorialsEntryComponent implements OnInit, OnChanges {
  @Input() entry: ContentTutorialsEntry;

  display: boolean;

  constructor(
    private versionComponent: VersionPageComponent,
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
