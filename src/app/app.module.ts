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
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { EditComponent } from './manage-recipes/edit/edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

import { HideOnScrollDirective } from './shared/hide-on-scroll.directive';
import { DropDownDirective } from './shared/dropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditComponent,
    RecipesComponent,
    ManageRecipesComponent, 
    HideOnScrollDirective,
    DropDownDirective,
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
