import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentTextEntry } from '../../../content/meta';

@Component({
  selector: 'app-page-text-entry',
  templateUrl: './page-text-entry.component.html',
  styleUrls: ['./page-text-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTextEntryComponent implements OnInit {
  @Input() entry: ContentTextEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
