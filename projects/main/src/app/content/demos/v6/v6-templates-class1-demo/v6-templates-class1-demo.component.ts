import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-class1-demo',
  templateUrl: './v6-templates-class1-demo.component.html',
  styleUrls: ['./v6-templates-class1-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesClass1DemoComponent implements OnInit {

  textClass = 'bold italic';

  constructor() {
  }

  ngOnInit() {
  }

}
