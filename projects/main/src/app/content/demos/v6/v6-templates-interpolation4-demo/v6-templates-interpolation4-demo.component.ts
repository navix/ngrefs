import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-interpolation4-demo',
  templateUrl: './v6-templates-interpolation4-demo.component.html',
  styleUrls: ['./v6-templates-interpolation4-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesInterpolation4DemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getVal() {
    return 2;
  }
}
