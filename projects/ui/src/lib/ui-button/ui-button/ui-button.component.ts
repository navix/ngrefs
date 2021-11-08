import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { UiButtonColor, UiButtonSize } from '../meta';
import { UiButtonGroupComponent } from '../ui-button-group/ui-button-group.component';

@Component({
  // tslint:disable-next-line
  selector: 'button[uiButton],a[uiButton]',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  providers: [
    NgClass,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent implements OnInit, OnChanges {
  @Input() color: UiButtonColor = 'default';

  @Input() disabled = false;

  @Input() uiButton: void;

  @Input() size: UiButtonSize = 'm';

  constructor(
    private ngClass: NgClass,
    @Optional() private group: UiButtonGroupComponent,
  ) {
  }

  ngOnChanges() {
    this.applyClass();
  }

  ngOnInit() {
    this.applyClass();
  }

  private applyClass() {
    this.ngClass.ngClass = {
      disabled: this.disabled,
      ['color-' + this.color]: true,
      ['size-' + this.size]: true,
      ['groupDirection-' + this.group?.direction]: !!this.group,
    };
  }
}
