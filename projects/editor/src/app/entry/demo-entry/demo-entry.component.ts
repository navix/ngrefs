import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { demos } from '../../../../../main/src/app/content/demos/demos';
import { ContentDemoEntry } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'editor-demo-entry',
  templateUrl: './demo-entry.component.html',
  styleUrls: ['./demo-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoEntryComponent implements OnInit {
  @Input() entry: ContentDemoEntry;

  demos = demos;

  constructor() {
  }

  ngOnInit() {
  }

}
