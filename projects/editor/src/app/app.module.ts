import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from 'ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandParamEntryComponent } from './entry/command-param-entry/command-param-entry.component';
import { EntryComponent } from './entry/entry.component';
import { HintEntryComponent } from './entry/hint-entry/hint-entry.component';
import { TextEntryComponent } from './entry/text-entry/text-entry.component';
import { TutorialsEntryComponent } from './entry/tutorials-entry/tutorials-entry.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MessagePipe } from './message/message.pipe';
import { MessageComponent } from './message/message/message.component';
import { MessagesListComponent } from './message/messages-list/messages-list.component';
import { PageComponent } from './page/page/page.component';
import { SectionGeneralComponent } from './section/section-general/section-general.component';
import { SectionPagesComponent } from './section/section-pages/section-pages.component';
import { SectionComponent } from './section/section/section.component';
import { UiButtonModule } from './ui/ui-button/ui-button.module';
import { UiFileModule } from './ui/ui-file/ui-file.module';
import { UiFormModule } from './ui/ui-form/ui-form.module';
import { UiModalModule } from './ui/ui-modal/ui-modal.module';
import { UiSelectModule } from './ui/ui-select/ui-select.module';
import { UiTextModule } from './ui/ui-text/ui-text.module';
import { VersionGeneralComponent } from './version/version-general/version-general.component';
import { VersionSectionsComponent } from './version/version-sections/version-sections.component';
import { VersionComponent } from './version/version/version.component';
import { VersionsListComponent } from './version/versions-list/versions-list.component';
import { VersionMessagesComponent } from './version/version-messages/version-messages.component';
import { MessageTranslationComponent } from './message/message-translation/message-translation.component';

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
    MessagePipe,
    HintEntryComponent,
    TutorialsEntryComponent,
    MessagesListComponent,
    VersionMessagesComponent,
    MessageTranslationComponent,
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // app
    AppRoutingModule,
    // ui
    UiModule,
    UiFileModule,
    UiFormModule,
    UiModalModule,
    UiButtonModule,
    UiTextModule,
    UiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
