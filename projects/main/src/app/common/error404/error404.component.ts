import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
