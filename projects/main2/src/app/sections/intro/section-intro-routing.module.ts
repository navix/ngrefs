import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionIntroComponent } from './section-intro/section-intro.component';

const routes: Routes = [
  {
    path: '',
    component: SectionIntroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionIntroRoutingModule {
}
