import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ContentTutorialsEntry } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';
import { VersionComponent } from '../../version/version/version.component';

@Component({
  selector: 'app-tutorials-entry',
  templateUrl: './tutorials-entry.component.html',
  styleUrls: ['./tutorials-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialsEntryComponent implements OnInit, OnChanges {
  @Input() entry: ContentTutorialsEntry;

  langs: string[];

  constructor(
    private versionComponent: VersionComponent,
    private data: DataService,
  ) {
  }

  ngOnInit() {
    this.langs = this.versionComponent.version.langs;
  }

  ngOnChanges() {
    if (!this.entry.links) {
      this.entry.links = [];
    }
  }

  create() {
    this.entry.links.push({});
  }

  delete(index: number) {
    if (confirm('Delete link?')) {
      this.data.delete(this.entry.links, index);
    }
  }

  moveUp(index: number) {
    this.data.move(this.entry.links, index, index - 1);
  }

  moveDown(index: number) {
    this.data.move(this.entry.links, index, index + 1);
  }
}
