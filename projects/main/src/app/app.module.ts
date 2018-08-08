import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitIconsModule, KitModalModule, kitMqBreakpoints, KitMqModule, KitOverlayModule } from '@ngx-kit/core';
import { MdRenderModule, MdRenderService } from '@nvxme/ngx-md-render';
import { UiModule } from 'ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';
import { HeadMenuComponent } from './menu/head-menu/head-menu.component';
import { SectionMenuComponent } from './menu/section-menu/section-menu.component';
import { MessageComponent } from './message/message/message.component';
import { MsgPipe } from './message/msg.pipe';
import { UiPipe } from './message/ui.pipe';
import { SectionNavComponent } from './section/section-nav/section-nav.component';
import { CommandParamEntryComponent } from './entry/command-param-entry/command-param-entry.component';
import { HintEntryComponent } from './entry/hint-entry/hint-entry.component';
import { TextEntryComponent } from './entry/text-entry/text-entry.component';
import { TutorialsEntryComponent } from './entry/tutorials-entry/tutorials-entry.component';
import { PageComponent } from './page/page.component';
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
    UiPipe,
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
