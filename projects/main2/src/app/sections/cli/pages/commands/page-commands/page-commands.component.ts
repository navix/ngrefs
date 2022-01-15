import { Component } from '@angular/core';
import { AppComponent } from '../../../../../layout/app/app.component';
import { compileBreadcrumbs } from '../../../../../layout/app/breadcrumb';
import { PageIntroComponent } from '../../page-intro/page-intro.component';
import { commandsNav } from '../commands.nav';

@Component({
  selector: 'app-page-commands',
  templateUrl: './page-commands.component.html',
  styleUrls: ['./page-commands.component.scss'],
})
export class PageCommandsComponent {
  commandsNav = commandsNav;

  static breadcrumbs = compileBreadcrumbs({
    prefix: '/cli/commands/',
    breadcrumbs: [
      {
        link: 'ng-new',
        title: 'ng new',
      },
      {
        link: 'ng-serve',
        title: 'ng serve',
      },
    ],
  });

  constructor(
    private app: AppComponent,
  ) {
    this.app.defBreadcrumbs([PageIntroComponent.breadcrumbs]);
  }
}
