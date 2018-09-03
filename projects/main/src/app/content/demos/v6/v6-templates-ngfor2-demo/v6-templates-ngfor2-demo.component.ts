import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'main-v6-templates-ngfor2-demo',
  templateUrl: './v6-templates-ngfor2-demo.component.html',
  styleUrls: ['./v6-templates-ngfor2-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesNgfor2DemoComponent implements OnInit {
  itemsObservable = from([['One', 'Two', 'Three']]);

  constructor() {
  }

  ngOnInit() {
  }

}
