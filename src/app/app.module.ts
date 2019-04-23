import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    MainnavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
