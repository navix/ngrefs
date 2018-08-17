import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentPage } from '../../content/meta';

@Component({
  selector: 'main-toc-entry',
  templateUrl: './toc-entry.component.html',
  styleUrls: ['./toc-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TocEntryComponent implements OnInit {
  @Input() page: ContentPage;

  constructor() {
  }

  ngOnInit() {
  }
}
