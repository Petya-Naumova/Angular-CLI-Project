import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToIngredientsList() {
    this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }
}
