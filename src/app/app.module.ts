import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
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

@NgModule({
  declarations: [
    AppComponent,
    QaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdToolbarModule,
    MdGridListModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'qa', component: QaComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
