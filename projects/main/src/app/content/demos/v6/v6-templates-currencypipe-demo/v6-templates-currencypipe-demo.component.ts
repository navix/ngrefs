import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-currencypipe-demo',
  templateUrl: './v6-templates-currencypipe-demo.component.html',
  styleUrls: ['./v6-templates-currencypipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesCurrencypipeDemoComponent implements OnInit {
  a = 0.259;

  b = 1.3495;

  constructor() {
  }

  ngOnInit() {
  }

}
