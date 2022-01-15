import { NgModule } from '@angular/core';
import { CodeComponent } from './code/code.component';
import { PreComponent } from './pre/pre.component';

@NgModule({
  declarations: [
    CodeComponent,
    PreComponent,
  ],
  exports: [
    CodeComponent,
    PreComponent,
  ],
})
export class CodeModule {
}
