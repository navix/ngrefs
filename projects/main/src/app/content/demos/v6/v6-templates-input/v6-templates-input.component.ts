import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-input',
  templateUrl: './v6-templates-input.component.html',
  styleUrls: ['./v6-templates-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  hi() {
    alert('Hi, there.');
  }
}
