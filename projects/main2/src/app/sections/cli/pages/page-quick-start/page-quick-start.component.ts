import { Component } from '@angular/core';
import { AppComponent } from '../../../../layout/app/app.component';
import { PageIntroComponent } from '../page-intro/page-intro.component';

@Component({
  selector: 'app-page-quick-start',
  templateUrl: './page-quick-start.component.html',
  styleUrls: ['./page-quick-start.component.scss'],
})
export class PageQuickStartComponent {
  constructor(
    private app: AppComponent,
  ) {
    this.app.defBreadcrumbs([PageIntroComponent.breadcrumbs]);
  }
}
