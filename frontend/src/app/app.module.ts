import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdToolbarModule,
  MdInputModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { QaComponent } from './qa/qa.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PriceComponent } from './price/price.component';
import { MessengerComponent } from './messenger/messenger.component';
import { BreakLine } from './pipes/break-line.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QaComponent,
    HomeComponent,
    MainMenuComponent,
    PriceComponent,
    MessengerComponent,
    BreakLine,
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
