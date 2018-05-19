import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentTextComponent } from './content-text/content-text.component';
import { VersionPageComponent } from './version-page/version-page.component';
import { KekDirective } from './kek.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentTextComponent,
    VersionPageComponent,
    KekDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
