import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-styling-hostbinding-demo',
  templateUrl: './v6-styling-hostbinding-demo.component.html',
  styleUrls: ['./v6-styling-hostbinding-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6StylingHostbindingDemoComponent implements OnInit {
  @HostBinding('style.background') backgroundColor = 'black';

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('style.color') get textColor() {
    return 'white';
  }

}
