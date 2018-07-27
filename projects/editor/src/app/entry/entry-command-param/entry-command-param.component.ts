import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentCommandParamEntry } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'app-entry-command-param',
  templateUrl: './entry-command-param.component.html',
  styleUrls: ['./entry-command-param.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryCommandParamComponent implements OnInit {
  @Input() entry: ContentCommandParamEntry;

  constructor() {
  }

  ngOnInit() {
  }
}
