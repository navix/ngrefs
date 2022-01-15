import { Component, Input } from '@angular/core';

@Component({
  selector: 'pre[code]',
  template: '<code [code]="code"></code>',
  styleUrls: ['./pre.component.scss'],
})
export class PreComponent {
  @Input() code: string;
}
