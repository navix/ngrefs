import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-pluralpipe-demo',
  templateUrl: './v6-templates-pluralpipe-demo.component.html',
  styleUrls: ['./v6-templates-pluralpipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesPluralpipeDemoComponent implements OnInit {
  value = 1;

  mapping: {[k: string]: string} = {
    '=0': 'No messages.',
    '=1': 'One message.',
    'other': '# messages.',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
