import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContentEntry } from '../../../../main/src/app/content/meta';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryComponent implements OnInit {
  @Output() delete = new EventEmitter();

  @Output() moveUp = new EventEmitter();

  @Output() moveDown = new EventEmitter();

  @Output() create = new EventEmitter();

  colors = {
    text: 'grey',
    'command-param': 'pink',
    hint: 'blue',
    tutorials: 'green',
  };

  @Input() entry: ContentEntry;

  constructor() {
  }

  get color() {
    if (this.entry) {
      return this.colors[this.entry.type];
    }
  }

  ngOnInit() {
  }
}
