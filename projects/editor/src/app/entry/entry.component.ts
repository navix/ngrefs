import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentEntry } from '../../../../main/src/app/content/meta';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryComponent implements OnInit {
  @Input() entry: ContentEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
