import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeModule } from '../../shared/code/code.module';
import { SimplePageModule } from '../../shared/simple-page/simple-page.module';
import { TutorialsModule } from '../../shared/tutorials/tutorials.module';
import { PageIntroComponent } from './pages/page-intro/page-intro.component';
import { SectionCliRoutingModule } from './section-cli-routing.module';
import { SectionCliComponent } from './section-cli/section-cli.component';
import { PageQuickStartComponent } from './pages/page-quick-start/page-quick-start.component';
import { PageCommandsComponent } from './pages/commands/page-commands/page-commands.component';
import { PageNgNewComponent } from './pages/commands/ng-new/page-ng-new/page-ng-new.component';
import { PageNgNewAllowedHostsComponent } from './pages/commands/ng-new/page-ng-new-allowed-hosts/page-ng-new-allowed-hosts.component';
import { PageNgNewPropertyComponent } from './pages/commands/ng-new/page-ng-new-property/page-ng-new-property.component';

@NgModule({
  imports: [
    CommonModule,
    SectionCliRoutingModule,
    CodeModule,
    TutorialsModule,
    SimplePageModule,
  ],
  declarations: [
    PageIntroComponent,
    SectionCliComponent,
    PageQuickStartComponent,
    PageCommandsComponent,
    PageNgNewComponent,
    PageNgNewAllowedHostsComponent,
    PageNgNewPropertyComponent,
  ],
})
export class SectionCliModule {
}
