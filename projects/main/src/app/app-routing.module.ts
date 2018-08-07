import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionPageComponent } from './section/section-page/section-page.component';
import { SectionComponent } from './section/section/section.component';
import { VersionComponent } from './version/version/version.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':lang',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':versionUrl',
        component: VersionComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
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
