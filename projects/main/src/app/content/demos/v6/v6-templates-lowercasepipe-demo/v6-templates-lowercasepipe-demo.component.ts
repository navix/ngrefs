import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-lowercasepipe-demo',
  templateUrl: './v6-templates-lowercasepipe-demo.component.html',
  styleUrls: ['./v6-templates-lowercasepipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesLowercasepipeDemoComponent implements OnInit {
  value = 'testTEST';

  constructor() { }

  ngOnInit() {
  }

}
