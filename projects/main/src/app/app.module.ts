import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitIconsModule, KitModalModule, kitMqBreakpoints, KitMqModule, KitOverlayModule } from '@ngx-kit/core';
import { MonitErrorHandler } from '@nvxme/monit-ng-client';
import { MdRenderModule, MdRenderService } from '@nvxme/ngx-md-render';
import { UiModule } from 'ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssVarModule } from './common/css-var/css-var.module';
import { LangRedirectComponent } from './common/lang-redirect/lang-redirect.component';
import { DemosModule } from './content/demos/demos.module';
import { CommandParamEntryComponent } from './entry/command-param-entry/command-param-entry.component';
import { DemoEntryComponent } from './entry/demo-entry/demo-entry.component';
import { HintEntryComponent } from './entry/hint-entry/hint-entry.component';
import { InterfaceOptionEntryComponent } from './entry/interface-option-entry/interface-option-entry.component';
import { TextEntryComponent } from './entry/text-entry/text-entry.component';
import { TocEntryComponent } from './entry/toc-entry/toc-entry.component';
import { TutorialsEntryComponent } from './entry/tutorials-entry/tutorials-entry.component';
import { Error404Component } from './common/error404/error404.component';
import { FragmentPipe } from './fragment/fragment.pipe';
import { HomeComponent } from './home/home.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';
import { HeadMenuComponent } from './menu/head-menu/head-menu.component';
import { SectionIntroMenuComponent } from './menu/section-intro-menu/section-intro-menu.component';
import { SectionMenuComponent } from './menu/section-menu/section-menu.component';
import { MessageComponent } from './message/message/message.component';
import { MsgPipe } from './message/msg.pipe';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';
import { SectionNavComponent } from './section/section-nav/section-nav.component';
import { SectionComponent } from './section/section/section.component';
import { VersionComponent } from './version/version.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    MessageComponent,
    SectionComponent,
    PageComponent,
    SectionMenuComponent,
    TextEntryComponent,
    CommandParamEntryComponent,
    HintEntryComponent,
    TutorialsEntryComponent,
    HeadMenuComponent,
    FooterMenuComponent,
    SectionNavComponent,
    HomeComponent,
    MsgPipe,
    SearchComponent,
    InterfaceOptionEntryComponent,
    TocEntryComponent,
    FragmentPipe,
    DemoEntryComponent,
    SectionIntroMenuComponent,
    Error404Component,
    LangRedirectComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MdRenderModule,
    UiModule,
    KitMqModule,
    KitModalModule,
    KitOverlayModule,
    KitIconsModule,
    DemosModule,
    CssVarModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: MonitErrorHandler,
    },
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
