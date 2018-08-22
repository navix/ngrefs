import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-file-demo',
  templateUrl: './v6-templates-declar-demo.component.html',
  styleUrls: ['./v6-templates-declar-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesDeclarDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
