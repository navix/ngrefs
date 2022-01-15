import { Component } from '@angular/core';
import { AppComponent } from '../../../../../../layout/app/app.component';
import { PageIntroComponent } from '../../../page-intro/page-intro.component';
import { PageCommandsComponent } from '../../page-commands/page-commands.component';
import { PageNgNewComponent } from '../page-ng-new/page-ng-new.component';

@Component({
  selector: 'app-page-ng-new-allowed-hosts',
  templateUrl: './page-ng-new-allowed-hosts.component.html',
  styleUrls: ['./page-ng-new-allowed-hosts.component.scss'],
})
export class PageNgNewAllowedHostsComponent {
  constructor(
    private app: AppComponent,
  ) {
    this.app.defBreadcrumbs([
      PageIntroComponent.breadcrumbs,
      PageCommandsComponent.breadcrumbs,
      PageNgNewComponent.breadcrumbs,
    ]);
  }
}
