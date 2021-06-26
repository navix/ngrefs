import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliContentAngularJsonComponent } from './cli-content-angular-json/cli-content-angular-json.component';
import { ContentIntroComponent } from '../content-intro/content-intro.component';
import { CliContentMainComponent } from './cli-content-main/cli-content-main.component';
import { CliContentNgNewComponent } from './cli-content-ng-new/cli-content-ng-new.component';
import { CliContentQuickStartComponent } from './cli-content-quick-start/cli-content-quick-start.component';

const routes: Routes = [
  {
    path: '',
    component: CliContentMainComponent,
    children: [
      {
        path: 'quick-start',
        component: CliContentQuickStartComponent,
      },
      {
        path: 'angular-json',
        component: CliContentAngularJsonComponent,
      },
      {
        path: 'command-ng-new',
        component: CliContentNgNewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CliContentRoutingModule {
}
