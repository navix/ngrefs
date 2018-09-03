import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-reference-demo',
  templateUrl: './v6-templates-reference-demo.component.html',
  styleUrls: ['./v6-templates-reference-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesReferenceDemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  callPhone(phone: string) {
    alert(phone);
  }

}
