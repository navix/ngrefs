import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { UiButtonGroupDirection } from '../meta';

@Component({
  selector: 'ui-button-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./ui-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgClass],
})
export class UiButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: UiButtonGroupDirection = 'row';

  constructor(private ngClass: NgClass) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.ngClass.ngClass = {
      ['direction-' + this.direction]: true,
    };
  }
}
