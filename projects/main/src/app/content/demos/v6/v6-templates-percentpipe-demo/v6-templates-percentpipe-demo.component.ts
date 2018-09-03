import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-percentpipe-demo',
  templateUrl: './v6-templates-percentpipe-demo.component.html',
  styleUrls: ['./v6-templates-percentpipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesPercentpipeDemoComponent implements OnInit {
  a = 0.259;
  b = 1.3495;

  constructor() { }

  ngOnInit() {
  }

}
