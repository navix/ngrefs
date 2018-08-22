import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { V6TemplatesDeclarDemoComponent } from './v6/v6-templates-declar-demo/v6-templates-declar-demo.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    V6TemplatesDeclarDemoComponent,
  ],
  exports: [],
  providers: [],
  entryComponents: [
    V6TemplatesDeclarDemoComponent,
  ],
})
export class DemosModule {
}
