import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngplural-demo',
  templateUrl: './v6-templates-ngplural-demo.component.html',
  styleUrls: ['./v6-templates-ngplural-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgpluralDemoComponent implements OnInit {
  value = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
