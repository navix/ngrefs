import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-class2-demo',
  templateUrl: './v6-templates-class2-demo.component.html',
  styleUrls: ['./v6-templates-class2-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesClass2DemoComponent implements OnInit {

  isSpecial = true;

  constructor() { }

  ngOnInit() {
  }

}
