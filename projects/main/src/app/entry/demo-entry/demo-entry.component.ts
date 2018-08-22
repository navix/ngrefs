import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { demos } from '../../content/demos/demos';
import { ContentDemoEntry } from '../../content/meta';

@Component({
  selector: 'main-demo-entry',
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
