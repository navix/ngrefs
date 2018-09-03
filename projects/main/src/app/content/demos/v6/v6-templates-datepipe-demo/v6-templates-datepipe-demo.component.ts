import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-datepipe-demo',
  templateUrl: './v6-templates-datepipe-demo.component.html',
  styleUrls: ['./v6-templates-datepipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesDatepipeDemoComponent implements OnInit {
  today = Date.now();

  constructor() {
  }

  ngOnInit() {
  }

}
