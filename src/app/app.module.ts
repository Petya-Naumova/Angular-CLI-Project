

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DirectivesModule } from './shared/directives';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { IngredientsComponent } from './ingredients/ingredients.component';
import { EditComponent } from './ingredients/edit/edit.component';

import { IngredientsService } from './ingredients/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IngredientsComponent,
    EditComponent,
  ],
  imports: [
    DirectivesModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
            prefix: 'my-dream-app',
            storageType: 'localStorage'
        })
  ],
  providers: [IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
