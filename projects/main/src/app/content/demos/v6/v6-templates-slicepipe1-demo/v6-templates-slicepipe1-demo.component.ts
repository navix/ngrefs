import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-slicepipe1-demo',
  templateUrl: './v6-templates-slicepipe1-demo.component.html',
  styleUrls: ['./v6-templates-slicepipe1-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesSlicepipe1DemoComponent implements OnInit {
  collection: string[] = ['a', 'b', 'c', 'd'];

  constructor() { }

  ngOnInit() {
  }

}
