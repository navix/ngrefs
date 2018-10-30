import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentHintEntry, ContentInterfaceOptionEntry, ContentTutorialsEntry } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';

@Component({
  selector: 'editor-interface-option-entry',
  templateUrl: './interface-option-entry.component.html',
  styleUrls: ['./interface-option-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterfaceOptionEntryComponent implements OnInit {
  @Input() entry: ContentInterfaceOptionEntry;

  constructor(
    private data: DataService,
  ) {
  }

  ngOnInit() {
  }

  initHint() {
    this.entry.hintEntry = this.data.createEntry() as ContentHintEntry;
    this.entry.hintEntry.type = 'hint';
  }

  initTutorials() {
    this.entry.tutorialsEntry = this.data.createEntry() as ContentTutorialsEntry;
    this.entry.tutorialsEntry.type = 'tutorials';
  }
}
