// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

import { IngredientsComponent } from './ingredients/ingredients.component';
import { EditComponent } from './ingredients/edit/edit.component';

import { DropDownDirective } from './shared/dropdown.directive';

import { IngredientsService } from './ingredients/ingredients.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    IngredientsComponent,
    EditComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    LocalStorageModule.withConfig({
            prefix: 'my-dream-app',
            storageType: 'localStorage'
        })
  ],
  providers: [IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
