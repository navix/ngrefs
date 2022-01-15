import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimplePageModule } from '../../shared/simple-page/simple-page.module';
import { SectionIntroRoutingModule } from './section-intro-routing.module';
import { SectionIntroComponent } from './section-intro/section-intro.component';

@NgModule({
  imports: [
    CommonModule,
    SectionIntroRoutingModule,
    SimplePageModule,
  ],
  declarations: [
    SectionIntroComponent,
  ],
})
export class SectionIntroModule {
}
