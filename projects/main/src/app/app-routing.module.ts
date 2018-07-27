import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defVersion } from './content/versions';
import { SectionHolderComponent } from './section/section-holder/section-holder.component';
import { SectionPageComponent } from './section/section-page/section-page.component';
import { VersionPageComponent } from './version-page/version-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `ru/${defVersion.url}`,
  },
  {
    path: ':lang/:versionUrl',
    component: VersionPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cli/intro',
      },
      {
        path: ':sectionUrl',
        component: SectionHolderComponent,
        children: [
          {
            path: ':pageUrl',
            component: SectionPageComponent,
          },
        ],
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
