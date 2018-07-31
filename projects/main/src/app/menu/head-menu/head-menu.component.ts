import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentVersion } from '../../content/meta';

@Component({
  selector: 'main-head-menu',
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadMenuComponent implements OnInit {
  @Input() version: ContentVersion;

  constructor() {
  }

  ngOnInit() {
  }

}
