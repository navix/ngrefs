import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { ContentMessageRef } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';
import { VersionComponent } from '../../version/version/version.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MessageComponent),
      multi: true,
    },
  ],
})
export class MessageComponent implements OnInit, ControlValueAccessor {
  /**
   * Context for new messages.
   */
  @Input() context: string;

  state?: ContentMessageRef;

  disabled = false;

  displayModal = false;

  private stateChanges = new Subject<ContentMessageRef>();

  private touches = new Subject<void>();

  constructor(
    private versionComponent: VersionComponent,
    private cdr: ChangeDetectorRef,
    private data: DataService,
  ) {
  }

  ngOnInit() {
  }

  get message() {
    return this.state;
  }

  save(value: string) {
    this.stateChanges.next(value);
  }

  registerOnChange(fn: any) {
    this.stateChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(rawValue: any): void {
    this.state = rawValue;
    this.cdr.detectChanges();
  }
}
