import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngmodel1-demo',
  templateUrl: './v6-templates-ngmodel1-demo.component.html',
  styleUrls: ['./v6-templates-ngmodel1-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgmodel1DemoComponent implements OnInit {

  name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
