import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerModule } from '@angular/platform-browser';
import { AppHammerConfig } from './app-hammer-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './common/error404/error404.component';
import { LangRedirectComponent } from './common/lang-redirect/lang-redirect.component';
import { DemosModule } from './content/demos/demos.module';
import { CommandParamEntryComponent } from './entry/command-param-entry/command-param-entry.component';
import { DemoEntryComponent } from './entry/demo-entry/demo-entry.component';
import { HintEntryComponent } from './entry/hint-entry/hint-entry.component';
import { InterfaceOptionEntryComponent } from './entry/interface-option-entry/interface-option-entry.component';
import { TextEntryComponent } from './entry/text-entry/text-entry.component';
import { TocEntryComponent } from './entry/toc-entry/toc-entry.component';
import { TutorialsEntryComponent } from './entry/tutorials-entry/tutorials-entry.component';
import { FragmentPipe } from './fragment/fragment.pipe';
import { HomeComponent } from './home/home.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';
import { HeadMenuComponent } from './menu/head-menu/head-menu.component';
import { SectionIntroMenuComponent } from './menu/section-intro-menu/section-intro-menu.component';
import { SectionMenuComponent } from './menu/section-menu/section-menu.component';
import { MessageComponent } from './message/message/message.component';
import { PageComponent } from './page/page.component';
import { PageSimpleComponent } from './page/types/page-simple/page-simple.component';
import { SearchComponent } from './search/search.component';
import { SectionHeaderComponent } from './section/section-header/section-header.component';
import { SectionNavComponent } from './section/section-nav/section-nav.component';
import { SectionComponent } from './section/section/section.component';
import { VersionComponent } from './version/version.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    AppRoutingModule,
    DemosModule,
    PlatformModule,
    HammerModule,
  ],
  providers: [
    {
      provide: HAMMER_LOADER,
      useValue: async () => {
        return import('hammerjs/hammer');
      },
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig,
    },
  ],
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
    SectionHeaderComponent,
    HomeComponent,
    SearchComponent,
    InterfaceOptionEntryComponent,
    TocEntryComponent,
    FragmentPipe,
    DemoEntryComponent,
    SectionIntroMenuComponent,
    Error404Component,
    LangRedirectComponent,
    SectionNavComponent,
    PageSimpleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
