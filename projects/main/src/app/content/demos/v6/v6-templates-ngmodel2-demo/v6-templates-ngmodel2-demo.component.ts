import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngmodel2-demo',
  templateUrl: './v6-templates-ngmodel2-demo.component.html',
  styleUrls: ['./v6-templates-ngmodel2-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgmodel2DemoComponent implements OnInit {

  name: string;

  constructor() {
  }

  ngOnInit() {
  }

  setUppercaseName(name: string) {
    this.name = name.toUpperCase();
  }

}
