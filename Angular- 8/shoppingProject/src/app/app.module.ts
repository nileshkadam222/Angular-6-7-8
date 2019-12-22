import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { header } from './header/header.component';
import { recipes } from './recipes/recipes.component';
import { recipeList } from './recipes/recipe-list/recipe-list.componet';
import { shoppingList } from './shopping-list/shopping-list.componet';
import { shoppingEdit } from './shopping-list/shopping-edit/shopping-edit.componet';
import { recipeItem } from './recipes/recipe-list/recipe-item/recipe-item.componet';
import { recipeDetail } from './recipes/recipe-detail/recipe-detail.componet';

@NgModule({
  declarations: [
    AppComponent,header,recipes,recipeList,
    recipeItem,recipeDetail,shoppingList,shoppingEdit
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
