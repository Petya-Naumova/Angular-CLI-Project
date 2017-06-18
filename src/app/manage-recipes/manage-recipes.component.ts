import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  moduleId: module.id,
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html'
})

export class ManageRecipesComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
}
