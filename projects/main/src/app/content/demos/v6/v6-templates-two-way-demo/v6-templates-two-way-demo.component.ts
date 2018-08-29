import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-two-way-demo',
  templateUrl: './v6-templates-two-way-demo.component.html',
  styleUrls: ['./v6-templates-two-way-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesTwoWayDemoComponent implements OnInit {

  size = 13;

  constructor() {
  }

  ngOnInit() {
  }

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = this.size + delta;
  }

}
