import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentCommandParamEntry, ContentHintEntry, ContentTutorialsEntry } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-command-param-entry',
  templateUrl: './command-param-entry.component.html',
  styleUrls: ['./command-param-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandParamEntryComponent implements OnInit {
  @Input() entry: ContentCommandParamEntry;

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
