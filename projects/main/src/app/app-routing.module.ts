import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defVersion } from './content/versions';
import { SectionPageComponent } from './section/section-page/section-page.component';
import { SectionComponent } from './section/section/section.component';
import { VersionComponent } from './version/version.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `en/${defVersion.url}`,
  },
  {
    path: ':lang/:versionUrl',
    component: VersionComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cli',
      },
      {
        path: ':sectionUrl',
        component: SectionComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'intro',
          },
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
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
