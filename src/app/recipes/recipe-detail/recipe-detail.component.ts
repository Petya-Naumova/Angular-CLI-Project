import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

import { ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipe = this.recipeService.getRecipeByIndex(this.id);
      }
    );
  }

  onAddToIngredientsList() {
    this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }
}
