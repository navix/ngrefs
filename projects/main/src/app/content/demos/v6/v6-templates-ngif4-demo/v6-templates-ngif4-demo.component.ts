import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngif4-demo',
  templateUrl: './v6-templates-ngif4-demo.component.html',
  styleUrls: ['./v6-templates-ngif4-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgif4DemoComponent implements OnInit {
  data = {
    user: {
      name: 'Superman',
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

}
