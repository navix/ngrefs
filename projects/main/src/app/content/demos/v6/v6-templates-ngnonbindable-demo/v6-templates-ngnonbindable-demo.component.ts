import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngnonbindable-demo',
  templateUrl: './v6-templates-ngnonbindable-demo.component.html',
  styleUrls: ['./v6-templates-ngnonbindable-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesNgnonbindableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
