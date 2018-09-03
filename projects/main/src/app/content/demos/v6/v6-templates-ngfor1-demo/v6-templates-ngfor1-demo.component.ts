import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngfor1-demo',
  templateUrl: './v6-templates-ngfor1-demo.component.html',
  styleUrls: ['./v6-templates-ngfor1-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesNgfor1DemoComponent implements OnInit {
  items = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
  }

}
