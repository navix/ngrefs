import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngif2-demo',
  templateUrl: './v6-templates-ngif2-demo.component.html',
  styleUrls: ['./v6-templates-ngif2-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesNgif2DemoComponent implements OnInit {
  isActive = true;

  constructor() { }

  ngOnInit() {
  }

}
