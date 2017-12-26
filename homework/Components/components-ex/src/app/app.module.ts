import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
import { ContentComponent } from '../content/content.component';
import { FontComponent } from '../font/font.component';
import { ColorComponent } from "../color-pickers/color.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FontComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
