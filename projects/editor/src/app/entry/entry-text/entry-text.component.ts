import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentTextEntry } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'app-entry-text',
  templateUrl: './entry-text.component.html',
  styleUrls: ['./entry-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryTextComponent implements OnInit {
  @Input() entry: ContentTextEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
