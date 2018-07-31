import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MdRenderModule, MdRenderService } from '@nvxme/ngx-md-render';
import { UiModule } from 'ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentMessageComponent } from './content-message/content-message.component';
import { ContentTextComponent } from './content-text/content-text.component';
import { SectionComponent } from './section/section/section.component';
import { SectionPageComponent } from './section/section-page/section-page.component';
import { VersionComponent } from './version/version.component';
import { SectionMenuComponent } from './menu/section-menu/section-menu.component';
import { PageTextEntryComponent } from './section/section-page/page-text-entry/page-text-entry.component';
import { PageCommandParamEntryComponent } from './section/section-page/page-command-param-entry/page-command-param-entry.component';
import { PageHintEntryComponent } from './section/section-page/page-hint-entry/page-hint-entry.component';
import { PageTutorialsEntryComponent } from './section/section-page/page-tutorials-entry/page-tutorials-entry.component';
import { UiMessageComponent } from './ui-message/ui-message.component';
import { HeadMenuComponent } from './menu/head-menu/head-menu.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTextComponent,
    VersionComponent,
    ContentMessageComponent,
    SectionComponent,
    SectionPageComponent,
    SectionMenuComponent,
    PageTextEntryComponent,
    PageCommandParamEntryComponent,
    PageHintEntryComponent,
    PageTutorialsEntryComponent,
    UiMessageComponent,
    HeadMenuComponent,
    FooterMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MdRenderModule,
    UiModule,
  ],
  providers: [
    MdRenderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
