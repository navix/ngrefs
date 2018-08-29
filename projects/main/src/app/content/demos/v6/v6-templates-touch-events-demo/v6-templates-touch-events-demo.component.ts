import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-touch-events-demo',
  templateUrl: './v6-templates-touch-events-demo.component.html',
  styleUrls: ['./v6-templates-touch-events-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesTouchEventsDemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  swipeHandler() {
    alert('Swipe handled!');
  }

}
