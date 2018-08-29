import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-template-style1-demo',
  templateUrl: './v6-template-style1-demo.component.html',
  styleUrls: ['./v6-template-style1-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplateStyle1DemoComponent implements OnInit {

  isSpecial = true;

  canSave = false;

  constructor() {
  }

  ngOnInit() {
  }
}
