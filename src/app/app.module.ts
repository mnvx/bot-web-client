import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdToolbarModule,
  MdGridListModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { QaComponent } from './qa/qa.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    QaComponent,
    HomeComponent,
    MainMenuComponent,
    PriceComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdToolbarModule,
    MdGridListModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
