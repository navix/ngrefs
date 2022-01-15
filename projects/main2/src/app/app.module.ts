import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IconModule } from '@novyk/ikong';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app/app.component';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    OverlayModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
