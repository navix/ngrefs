import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-template-style2-demo',
  templateUrl: './v6-template-style2-demo.component.html',
  styleUrls: ['./v6-template-style2-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplateStyle2DemoComponent implements OnInit {

  isSpecial = true;

  constructor() {
  }

  ngOnInit() {
  }
}
