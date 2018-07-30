import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentTextEntry } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextEntryComponent implements OnInit {
  @Input() entry: ContentTextEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
