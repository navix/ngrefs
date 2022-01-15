import { Component } from '@angular/core';
import { AppComponent } from '../../../../../../layout/app/app.component';
import { compileBreadcrumbs } from '../../../../../../layout/app/breadcrumb';
import { PageIntroComponent } from '../../../page-intro/page-intro.component';
import { PageCommandsComponent } from '../../page-commands/page-commands.component';
import { ngNewNav } from '../ng-new.nav';

@Component({
  selector: 'app-page-ng-new',
  templateUrl: './page-ng-new.component.html',
  styleUrls: ['./page-ng-new.component.scss'],
})
export class PageNgNewComponent {
  ngNewNav = ngNewNav;

  static breadcrumbs = compileBreadcrumbs({
    prefix: '/cli/commands/ng-new/',
    breadcrumbs: [
      {
        link: 'allowed-hosts',
        title: '--allowed-hosts',
      },
      {
        link: 'aot',
        title: '--aot',
      },
    ],
  });

  constructor(
    private app: AppComponent,
  ) {
    this.app.defBreadcrumbs([
      PageIntroComponent.breadcrumbs,
      PageCommandsComponent.breadcrumbs,
    ]);
  }
}
