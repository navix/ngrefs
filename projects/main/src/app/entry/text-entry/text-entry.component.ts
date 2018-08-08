import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentTextEntry } from '../../content/meta';

@Component({
  selector: 'main-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.scss'],
})
export class TextEntryComponent implements OnInit {
  @Input() entry: ContentTextEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
