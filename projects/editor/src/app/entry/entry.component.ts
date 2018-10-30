import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContentEntry } from '../../../../main/src/app/content/meta';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryComponent implements OnInit {
  @Input() entry: ContentEntry;

  @Input() showTypeSelector = true;

  @Input() showControls = true;

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

  constructor() {
  }

  ngOnInit() {
  }

  get color() {
    if (this.entry) {
      return this.colors[this.entry.type];
    }
  }
}
