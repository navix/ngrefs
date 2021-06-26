import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './common/error404/error404.component';
import { LangRedirectComponent } from './common/lang-redirect/lang-redirect.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';
import { SectionComponent } from './section/section/section.component';
import { VersionResolver } from './version/version-resolver';
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
  // old versions redirect
  {
    path: 'ru',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'en',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'en',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'v6',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'v7',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'v8',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'v9',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'v10',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  {
    path: 'latest',
    children: [
      {
        path: '**',
        component: LangRedirectComponent,
      },
    ],
  },
  // routes
  {
    path: '',
    resolve: {
      version: VersionResolver,
    },
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
            path: 'search',
            component: SearchComponent,
          },
          {
            path: ':pageUrl',
            component: PageComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
