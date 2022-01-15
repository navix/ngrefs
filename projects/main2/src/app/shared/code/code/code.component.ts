import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'code[code]',
  template: `{{ formatted }}`,
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnChanges {
  @Input() code: string;

  formatted: string;

  ngOnChanges() {
    this.formatted = this.code.trim();
  }
}
