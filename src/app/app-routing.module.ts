import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppinglistComponent} from './components/shoppinglist/shoppinglist.component';
import {WeekmenuComponent} from './components/weekmenu/weekmenu.component';

const routes: Routes = [
  {
    path: 'shoppingList',
    component: ShoppinglistComponent
  },
  {
    path: 'weekMenus',
    component: WeekmenuComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
