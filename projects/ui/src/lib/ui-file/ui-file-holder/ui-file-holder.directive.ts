import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { UiFileComponent } from '../ui-file/ui-file.component';

@Directive({
  selector: '[uiFileHolder]',
})
export class UiFileHolderDirective {
  @Input() uiFileWrapper: void;

  file?: UiFileComponent;

  @HostBinding('style.display') styleDisplay = 'inline-block';

  @HostBinding('style.overflow') styleOverflow = 'hidden';

  @HostBinding('style.position') stylePosition = 'relative';

  @HostListener('click', ['$event']) clickHandler(event: any) {
    if (this.file) {
      this.file.emitClick();
    }
  }
}
