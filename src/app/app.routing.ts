import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',  component: RecipesComponent },
  { path: 'ingredients', component: IngredientsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
