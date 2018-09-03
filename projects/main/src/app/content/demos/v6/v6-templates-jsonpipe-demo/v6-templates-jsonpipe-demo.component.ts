import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-jsonpipe-demo',
  templateUrl: './v6-templates-jsonpipe-demo.component.html',
  styleUrls: ['./v6-templates-jsonpipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesJsonpipeDemoComponent implements OnInit {
  data = {
    field: 'value',
    obj: {
      innerField: '123',
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

}
