import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-switch-demo',
  templateUrl: './v6-templates-switch-demo.component.html',
  styleUrls: ['./v6-templates-switch-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesSwitchDemoComponent implements OnInit {
  type = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
