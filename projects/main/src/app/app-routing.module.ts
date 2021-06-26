import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './common/error404/error404.component';
import { LangRedirectComponent } from './common/lang-redirect/lang-redirect.component';
import { cliContentSettings } from './content2/cli-content/cli-content-settings';
import { ContentIntroComponent } from './content2/content-intro/content-intro.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';
import { SectionComponent } from './section/section/section.component';
import { VersionResolver } from './version/version-resolver';
import { VersionComponent } from './version/version.component';

const routes: Routes = [
  {
    path: '',
    component: ContentIntroComponent,
  },
  {
    path: 'e404',
    component: Error404Component,
  },
  // sections
  {
    path: cliContentSettings.path,
    loadChildren: () => import('./content2/cli-content/cli-content.module').then(m => m.CliContentModule),
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
  // old versions redirects
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
    path: ':versionUrl',
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
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
