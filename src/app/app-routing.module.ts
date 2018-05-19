import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { versions } from './content/versions';
import { VersionPageComponent } from './version-page/version-page.component';

const latest = versions[versions.length - 1];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `ru/${latest.index.ver}`,
  },
  {
    path: ':lang/:version',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `overview`,
      },
      {
        path: ':url',
        component: VersionPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
