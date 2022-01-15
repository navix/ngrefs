import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNgNewAllowedHostsComponent } from './pages/commands/ng-new/page-ng-new-allowed-hosts/page-ng-new-allowed-hosts.component';
import { PageNgNewPropertyComponent } from './pages/commands/ng-new/page-ng-new-property/page-ng-new-property.component';
import { PageNgNewComponent } from './pages/commands/ng-new/page-ng-new/page-ng-new.component';
import { PageCommandsComponent } from './pages/commands/page-commands/page-commands.component';
import { PageIntroComponent } from './pages/page-intro/page-intro.component';
import { PageQuickStartComponent } from './pages/page-quick-start/page-quick-start.component';
import { SectionCliComponent } from './section-cli/section-cli.component';

const routes: Routes = [
  {
    path: '',
    component: SectionCliComponent,
    children: [
      {
        path: '',
        component: PageIntroComponent,
      },
      {
        path: 'quick-start',
        component: PageQuickStartComponent,
      },
      {
        path: 'commands',
        children: [
          {
            path: '',
            component: PageCommandsComponent,
          },
          {
            path: 'ng-new',
            children: [
              {
                path: '',
                component: PageNgNewComponent,
              },
              {
                path: ':property',
                component: PageNgNewPropertyComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionCliRoutingModule {
}
