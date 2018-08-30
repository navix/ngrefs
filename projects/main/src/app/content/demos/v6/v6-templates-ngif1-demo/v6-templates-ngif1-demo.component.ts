import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngif1-demo',
  templateUrl: './v6-templates-ngif1-demo.component.html',
  styleUrls: ['./v6-templates-ngif1-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgif1DemoComponent implements OnInit {
  isActive = true;

  constructor() {
  }

  ngOnInit() {
  }

}
