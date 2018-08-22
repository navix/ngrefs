import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[clickAlert]',
})
export class V6TemplatesDirective1DemoDirective {
  @HostListener('click') clickHandler() {
    alert('Clicked');
  }
}
