import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IngredientsService } from './../ingredients/ingredients.service';
import { Ingredient } from '../shared/models';
import { Recipe } from '../shared/models/recipe.model';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class RecipeService implements OnInit {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe [] = []
  constructor(private http: Http, private ingrService: IngredientsService) {}
  ngOnInit() {
      this.http.get('https://angular-cooking-app.firebaseio.com/recipes.json')
    .subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
          }
        }
        this.recipes = recipes;
        console.log('recipes:', recipes);
    }
    )
  }
  setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
  }
  getRecipes() {
      return this.recipes.slice();
  }
  getRecipeByIndex(index: number) {
      return this.recipes[index];
  }
  addIngredientsToList(ingredients: Ingredient[]) {
    this.ingrService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
