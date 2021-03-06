import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
   path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'
  },
  {
    path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
