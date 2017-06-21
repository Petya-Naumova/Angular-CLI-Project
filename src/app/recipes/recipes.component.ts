import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
 // moduleId: module.id,
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})

export class RecipesComponent {
  selectedRecipe: Recipe;
}
