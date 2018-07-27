import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryCommandParamComponent } from './entry/entry-command-param/entry-command-param.component';
import { EntryTextComponent } from './entry/entry-text/entry-text.component';
import { EntryComponent } from './entry/entry.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MessagePipe } from './message/message.pipe';
import { MessageComponent } from './message/message/message.component';
import { PageComponent } from './page/page/page.component';
import { SectionGeneralComponent } from './section/section-general/section-general.component';
import { SectionPagesComponent } from './section/section-pages/section-pages.component';
import { SectionComponent } from './section/section/section.component';
import { UiButtonModule } from './ui/ui-button/ui-button.module';
import { UiCheckboxModule } from './ui/ui-checkbox/ui-checkbox.module';
import { UiFileModule } from './ui/ui-file/ui-file.module';
import { UiFormModule } from './ui/ui-form/ui-form.module';
import { UiModalModule } from './ui/ui-modal/ui-modal.module';
import { UiSelectModule } from './ui/ui-select/ui-select.module';
import { UiTextModule } from './ui/ui-text/ui-text.module';
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
    EntryTextComponent,
    MessageComponent,
    EntryCommandParamComponent,
    VersionsListComponent,
    VersionGeneralComponent,
    VersionSectionsComponent,
    SectionGeneralComponent,
    SectionPagesComponent,
    MenuItemsComponent,
    MessagePipe,
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // app
    AppRoutingModule,
    // ui
    UiFileModule,
    UiFormModule,
    UiModalModule,
    UiButtonModule,
    UiTextModule,
    UiSelectModule,
    UiCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
