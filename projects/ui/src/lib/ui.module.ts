import { NgModule } from '@angular/core';
import { Nl2brPipe } from './nl2br/nl2br.pipe';
import { UiCheckboxModule } from './ui-checkbox/ui-checkbox.module';

@NgModule({
  declarations: [
    Nl2brPipe,
  ],
  exports: [
    UiCheckboxModule,
    Nl2brPipe,
  ],
})
export class UiModule {
}
