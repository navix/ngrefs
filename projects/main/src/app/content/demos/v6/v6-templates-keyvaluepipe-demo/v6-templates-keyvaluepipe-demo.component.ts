import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-keyvaluepipe-demo',
  templateUrl: './v6-templates-keyvaluepipe-demo.component.html',
  styleUrls: ['./v6-templates-keyvaluepipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesKeyvaluepipeDemoComponent implements OnInit {

  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);

  constructor() { }

  ngOnInit() {
  }

}
