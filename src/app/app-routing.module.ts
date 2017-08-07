import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngredientsComponent } from './ingredients/ingredients.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/ingredients', pathMatch: 'full' },
  {
    path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'
  },
  { path: 'ingredients', component: IngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
