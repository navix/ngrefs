import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-uppercasepipe-demo',
  templateUrl: './v6-templates-uppercasepipe-demo.component.html',
  styleUrls: ['./v6-templates-uppercasepipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesUppercasepipeDemoComponent implements OnInit {

  value = 'TESTtest';

  constructor() {
  }

  ngOnInit() {
  }

}
