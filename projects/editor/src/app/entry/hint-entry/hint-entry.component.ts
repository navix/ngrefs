import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentHintEntry } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'app-hint-entry',
  templateUrl: './hint-entry.component.html',
  styleUrls: ['./hint-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintEntryComponent implements OnInit {
  @Input() entry: ContentHintEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
