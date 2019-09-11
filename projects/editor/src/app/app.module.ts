import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from 'ui';
import { DemosModule } from '../../../main/src/app/content/demos/demos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandParamEntryComponent } from './entry/command-param-entry/command-param-entry.component';
import { DemoEntryComponent } from './entry/demo-entry/demo-entry.component';
import { EntryComponent } from './entry/entry.component';
import { HintEntryComponent } from './entry/hint-entry/hint-entry.component';
import { InterfaceOptionEntryComponent } from './entry/interface-option-entry/interface-option-entry.component';
import { TextEntryComponent } from './entry/text-entry/text-entry.component';
import { TutorialsEntryComponent } from './entry/tutorials-entry/tutorials-entry.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MessageComponent } from './message/message/message.component';
import { PageComponent } from './page/page/page.component';
import { SectionGeneralComponent } from './section/section-general/section-general.component';
import { SectionPagesComponent } from './section/section-pages/section-pages.component';
import { SectionComponent } from './section/section/section.component';
import { VersionGeneralComponent } from './version/version-general/version-general.component';
import { VersionSectionsComponent } from './version/version-sections/version-sections.component';
import { VersionComponent } from './version/version/version.component';
import { VersionsListComponent } from './version/versions-list/versions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    SectionComponent,
    MenuComponent,
    MenuItemComponent,
    PageComponent,
    EntryComponent,
    TextEntryComponent,
    MessageComponent,
    CommandParamEntryComponent,
    VersionsListComponent,
    VersionGeneralComponent,
    VersionSectionsComponent,
    SectionGeneralComponent,
    SectionPagesComponent,
    MenuItemsComponent,
    HintEntryComponent,
    TutorialsEntryComponent,
    InterfaceOptionEntryComponent,
    DemoEntryComponent,
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // app
    AppRoutingModule,
    UiModule,
    DemosModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
