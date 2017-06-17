// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientComponent } from './recipes/recipe-list/recipe-item/ingredient/ingredient.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { HideOnScrollDirective } from './hide-on-scroll.directive';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent, 
    IngredientComponent, 
    SearchRecipesComponent, 
    HideOnScrollDirective, 
    RecipeListComponent, 
    RecipeDetailComponent, 
    RecipeItemComponent, 
    FooterComponent
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
