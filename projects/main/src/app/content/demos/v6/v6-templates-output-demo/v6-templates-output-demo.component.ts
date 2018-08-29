import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-output-demo',
  templateUrl: './v6-templates-output-demo.component.html',
  styleUrls: ['./v6-templates-output-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesOutputDemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  emitTest() {
    alert(`Test event handled with value: test`);
  }

}
