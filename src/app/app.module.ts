// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { IngredientsService } from './ingredients/ingredients.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
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
  providers: [IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
