// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HttpModule } from '@angular/http';

import { RecipeService } from './recipes/recipe.service';
import { IngredientsService } from './ingredients/ingredients.service';
import { DataStorageService } from './shared/data-storage.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
      prefix: 'cooking-app',
      storageType: 'localStorage'
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [IngredientsService, RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
