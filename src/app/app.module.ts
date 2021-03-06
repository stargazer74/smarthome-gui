import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { WeekmenuComponent } from './components/weekmenu/weekmenu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    MainnavComponent,
    WeekmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    HttpClientModule,
    DragDropModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
