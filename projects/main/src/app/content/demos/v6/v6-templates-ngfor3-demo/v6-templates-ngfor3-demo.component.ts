import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngfor3-demo',
  templateUrl: './v6-templates-ngfor3-demo.component.html',
  styleUrls: ['./v6-templates-ngfor3-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgfor3DemoComponent implements OnInit {

  items = [
    {id: 1, title: 'One'},
    {id: 2, title: 'Two'},
    {id: 3, title: 'Three'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

}
