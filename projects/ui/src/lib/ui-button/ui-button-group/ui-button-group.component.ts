import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, } from '@angular/core';
import { SxClass } from '@novyk/sx-class';
import { UiButtonGroupDirection } from '../meta';

@Component({
  selector: 'ui-button-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./ui-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    SxClass,
  ],
})
export class UiButtonGroupComponent implements OnInit, OnChanges {
  @Input() direction: UiButtonGroupDirection = 'row';

  constructor(private sxClass: SxClass) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.sxClass.apply({
      direction: this.direction,
    });
  }
}
