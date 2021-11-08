import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Content2PageSimpleContent } from '../../../content/meta2';

@Component({
  selector: 'main-page-simple',
  templateUrl: './page-simple.component.html',
  styleUrls: ['./page-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSimpleComponent implements OnInit {
  @Input() content: Content2PageSimpleContent;

  constructor() {
  }

  ngOnInit(): void {
  }

}
