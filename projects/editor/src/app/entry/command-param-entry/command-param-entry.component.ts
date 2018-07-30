import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentCommandParamEntry } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'app-command-param-entry',
  templateUrl: './command-param-entry.component.html',
  styleUrls: ['./command-param-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandParamEntryComponent implements OnInit {
  @Input() entry: ContentCommandParamEntry;

  constructor() {
  }

  ngOnInit() {
  }
}
