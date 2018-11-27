import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section/section.component';
import { VersionComponent } from './version/version.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'e404',
    component: Error404Component,
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
                component: PageComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/e404',
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
