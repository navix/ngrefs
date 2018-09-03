import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-slicepipe2-demo',
  templateUrl: './v6-templates-slicepipe2-demo.component.html',
  styleUrls: ['./v6-templates-slicepipe2-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesSlicepipe2DemoComponent implements OnInit {

  str = 'abcdefghij';

  constructor() { }

  ngOnInit() {
  }

}
