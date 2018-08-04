import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { uuid } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { ContentMessage, ContentMessageRef } from '../../../../../main/src/app/content/meta';
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

  readonly source = 'en';

  state?: ContentMessageRef;

  disabled = false;

  displayModal = false;

  private stateChanges = new Subject<ContentMessageRef>();

  private touches = new Subject<void>();

  constructor(
    private versionComponent: VersionComponent,
    private cdr: ChangeDetectorRef,
  ) {
  }

  get message() {
    return this.state && this.state.id
      ? this.findMessage()
      : undefined;
  }

  get langs() {
    return this.versionComponent.version.langs;
  }

  ngOnInit() {
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
    if (!this.state || !this.state.id) {
      this.generateId();
      this.createMessage();
      this.stateChanges.next(this.state);
    }
    this.cdr.detectChanges();
  }

  createLocale() {
    const availableLangs = this.versionComponent.version.langs
      .filter(l => !this.message.locales.find(loc => loc.lang === l));
    this.message.locales.push({
      lang: availableLangs.length > 0 ? availableLangs[0] : '',
      text: '',
    });
  }

  private findMessage() {
    if (this.state && this.state.id) {
      const message = this.versionComponent.version.messages
        .find(m => m.id === this.state.id);
      return message || this.createMessage();
    }
  }

  private generateId() {
    this.state = {id: uuid()};
  }

  private createMessage() {
    const message: ContentMessage = {
      id: this.state.id,
      context: this.context,
      locales: [{
        lang: 'en',
        text: '',
      }],
    };
    this.versionComponent.version.messages.push(message);
    return message;
  }
}
