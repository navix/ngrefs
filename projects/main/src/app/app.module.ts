import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitIconsModule, KitModalModule, kitMqBreakpoints, KitMqModule, KitOverlayModule } from '@ngx-kit/core';
import { MdRenderModule, MdRenderService } from '@nvxme/ngx-md-render';
import { UiModule } from 'ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentMessageComponent } from './content-message/content-message.component';
import { ContentTextComponent } from './content-text/content-text.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';
import { HeadMenuComponent } from './menu/head-menu/head-menu.component';
import { SectionMenuComponent } from './menu/section-menu/section-menu.component';
import { PageCommandParamEntryComponent } from './section/section-page/page-command-param-entry/page-command-param-entry.component';
import { PageHintEntryComponent } from './section/section-page/page-hint-entry/page-hint-entry.component';
import { PageTextEntryComponent } from './section/section-page/page-text-entry/page-text-entry.component';
import { PageTutorialsEntryComponent } from './section/section-page/page-tutorials-entry/page-tutorials-entry.component';
import { SectionPageComponent } from './section/section-page/section-page.component';
import { SectionNavComponent } from './section/section-nav/section-nav.component';
import { SectionComponent } from './section/section/section.component';
import { UiMessageComponent } from './ui-message/ui-message.component';
import { VersionComponent } from './version/version.component';

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
    SectionNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MdRenderModule,
    UiModule,
    KitMqModule,
    KitModalModule,
    KitOverlayModule,
    KitIconsModule,
  ],
  providers: [
    MdRenderService,
    {
      provide: kitMqBreakpoints,
      useValue: {
        mobile: '320px',
        tablet: '740px',
        desktop: '980px',
        wide: '1300px',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
