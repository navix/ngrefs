import { NgModule } from '@angular/core';
import { Nl2brPipe } from './nl2br/nl2br.pipe';
import { UiButtonModule } from './ui-button/ui-button.module';
import { UiCheckboxModule } from './ui-checkbox/ui-checkbox.module';
import { UiFileModule } from './ui-file/ui-file.module';
import { UiFormModule } from './ui-form/ui-form.module';
import { UiModalModule } from './ui-modal/ui-modal.module';
import { UiSelectModule } from './ui-select/ui-select.module';
import { UiTextModule } from './ui-text/ui-text.module';

@NgModule({
  declarations: [
    Nl2brPipe,
  ],
  exports: [
    UiButtonModule,
    UiCheckboxModule,
    UiFileModule,
    UiFormModule,
    UiModalModule,
    UiSelectModule,
    UiTextModule,
    Nl2brPipe,
  ],
})
export class UiModule {
}
