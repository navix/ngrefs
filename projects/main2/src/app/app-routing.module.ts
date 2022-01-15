import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sections/intro/section-intro.module').then(m => m.SectionIntroModule),
  },
  {
    path: 'cli',
    loadChildren: () => import('./sections/cli/section-cli.module').then(m => m.SectionCliModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
