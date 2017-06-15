import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',  component: RecipesComponent },
  { path: 'search-recipes', component: SearchRecipesComponent },
  { path: 'add-recipes', component: AddRecipesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
