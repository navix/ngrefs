import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
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
    component: VersionPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `overview`,
      },
      {
        path: ':url',
        component: ArticlePageComponent,
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
