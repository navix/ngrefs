import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentCommandParamEntry } from '../../content/meta';

@Component({
  selector: 'main-command-param-entry',
  templateUrl: './command-param-entry.component.html',
  styleUrls: ['./command-param-entry.component.scss'],
})
export class CommandParamEntryComponent implements OnInit {
  @Input() entry: ContentCommandParamEntry;

  constructor() {
  }

  ngOnInit() {
  }
}
