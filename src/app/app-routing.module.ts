import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppinglistComponent} from './components/shoppinglist/shoppinglist.component';

const routes: Routes = [{path: 'shoppingList', component: ShoppinglistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
