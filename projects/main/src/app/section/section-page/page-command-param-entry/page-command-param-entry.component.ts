import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentCommandParamEntry } from '../../../content/meta';

@Component({
  selector: 'app-page-command-param-entry',
  templateUrl: './page-command-param-entry.component.html',
  styleUrls: ['./page-command-param-entry.component.scss'],
})
export class PageCommandParamEntryComponent implements OnInit {
  @Input() entry: ContentCommandParamEntry;

  constructor() {
  }

  ngOnInit() {
  }
}
