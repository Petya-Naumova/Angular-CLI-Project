import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',  component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent},
    { path: ':id', component: RecipeDetailComponent}
  ] },
  { path: 'ingredients', component: IngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
