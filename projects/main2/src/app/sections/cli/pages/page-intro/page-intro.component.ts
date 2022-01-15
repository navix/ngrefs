import { Component } from '@angular/core';
import { AppComponent } from '../../../../layout/app/app.component';
import { Breadcrumb, compileBreadcrumbs } from '../../../../layout/app/breadcrumb';
import { cliNav } from '../../cli.nav';

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss'],
})
export class PageIntroComponent {
  cliNav = cliNav;

  static breadcrumbs: Breadcrumb[] = compileBreadcrumbs({
    prefix: '/cli',
    breadcrumbs: [
      {
        link: '/quick-start',
        title: 'Quick Start',
      },
      {
        link: '/angular-json',
        title: 'angular.json',
      },
      {
        link: '/commands',
        title: 'Commands',
      },
    ],
  });

  constructor(
    private app: AppComponent,
  ) {
    this.app.defBreadcrumbs();
  }
}
