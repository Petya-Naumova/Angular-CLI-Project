// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

// Components
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { IngredientComponent } from './add-recipes/ingredient/ingredient.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { HideOnScrollDirective } from './hide-on-scroll.directive';


@NgModule({
  declarations: [
    AppComponent, RecipesComponent, AddRecipesComponent, IngredientComponent, SearchRecipesComponent, HideOnScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
            prefix: 'my-dream-app',
            storageType: 'localStorage'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
