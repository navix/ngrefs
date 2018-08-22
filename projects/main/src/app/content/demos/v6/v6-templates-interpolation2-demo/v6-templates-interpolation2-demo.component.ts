import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-interpolation2-demo',
  templateUrl: './v6-templates-interpolation2-demo.component.html',
  styleUrls: ['./v6-templates-interpolation2-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesInterpolation2DemoComponent implements OnInit {
  title = 'Angular';

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  constructor() {
  }

  ngOnInit() {
  }

}
