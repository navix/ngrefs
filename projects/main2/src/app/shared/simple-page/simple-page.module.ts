import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimplePageComponent } from './simple-page/simple-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SimplePageComponent,
  ],
  exports: [
    SimplePageComponent,
  ],
})
export class SimplePageModule {
}
