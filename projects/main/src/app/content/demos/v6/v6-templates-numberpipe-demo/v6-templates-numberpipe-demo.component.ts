import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-numberpipe-demo',
  templateUrl: './v6-templates-numberpipe-demo.component.html',
  styleUrls: ['./v6-templates-numberpipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesNumberpipeDemoComponent implements OnInit {
  e = Math.E;
  pi = Math.PI;

  constructor() { }

  ngOnInit() {
  }

}
