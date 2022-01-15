import { NgModule } from '@angular/core';
import { TutorialsComponent } from './tutorials/tutorials.component';

@NgModule({
  declarations: [
    TutorialsComponent,
  ],
  exports: [
    TutorialsComponent,
  ],
})
export class TutorialsModule {
}
