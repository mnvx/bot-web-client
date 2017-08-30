import { Routes } from "@angular/router";

import { QaComponent } from './qa/qa.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qa', component: QaComponent },
  { path: 'price', component: PriceComponent },
];