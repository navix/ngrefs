import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngif3-demo',
  templateUrl: './v6-templates-ngif3-demo.component.html',
  styleUrls: ['./v6-templates-ngif3-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgif3DemoComponent implements OnInit {
  isActive = true;

  constructor() {
  }

  ngOnInit() {
  }

}
