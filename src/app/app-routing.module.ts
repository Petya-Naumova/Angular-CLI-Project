import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngredientsComponent } from './ingredients/ingredients.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
