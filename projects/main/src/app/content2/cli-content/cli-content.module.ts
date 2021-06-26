import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentLinksBlockModule } from '../../shared/content-links-block/content-links-block.module';
import { CliContentAngularJsonComponent } from './cli-content-angular-json/cli-content-angular-json.component';
import { CliContentMainComponent } from './cli-content-main/cli-content-main.component';
import { CliContentNgNewComponent } from './cli-content-ng-new/cli-content-ng-new.component';
import { CliContentOptionComponent } from './cli-content-option/cli-content-option.component';
import { CliContentQuickStartComponent } from './cli-content-quick-start/cli-content-quick-start.component';
import { CliContentRoutingModule } from './cli-content-routing.module';

@NgModule({
  declarations: [
    CliContentMainComponent,
    CliContentQuickStartComponent,
    CliContentAngularJsonComponent,
    CliContentNgNewComponent,
    CliContentOptionComponent,
  ],
  imports: [
    CliContentRoutingModule,
    CommonModule,
    ContentLinksBlockModule,
  ],
})
export class CliContentModule {
}
