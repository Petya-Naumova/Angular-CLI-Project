import { IngredientsService } from './../ingredients/ingredients.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe [] = [
      new Recipe('Lemon Cake',
      'Cupcake ipsum dolor sit amet jelly apple pie sesame snaps biscuit.',
      '/../../assets/images/lemon-cake.jpg'
      , '#fafafa', [
          new Ingredient('Lemon', 2),
          new Ingredient('Flour', 250),
          new Ingredient('Egg', 4),
          new Ingredient('Sugar', 350),
          new Ingredient('Vanilla extract', 1)
      ]),
      new Recipe('Pancakes',
      'Try these marvelous pancakes, very easy to make',
      '/../../assets/images/pancakes.jpg',
      '#fafafa', [
          new Ingredient('Flour', 250),
          new Ingredient('Egg', 3),
          new Ingredient('Milk', 250)
      ]),
      new Recipe('Cake', 'This is how you can make very tasty cake only with...',
      '/../../assets/images/cake.jpg',
      '#fafafa', [
          new Ingredient('Fruit', 2),
          new Ingredient('Flour', 250),
          new Ingredient('Egg', 5),
          new Ingredient('Sugar', 350),
          new Ingredient('Vanilla extract', 1),
          new Ingredient('Milk', 500)
      ]),
      new Recipe('Tomato and Mozzarella',
       'Tomato and Mozzarella',
      '/../../assets/images/tomato-mozzarella.jpg',
       '#fafafa', [
           new Ingredient('Mozzarella', 350),
           new Ingredient('Tomato', 2)
       ]),
      new Recipe('Salmon', 'Salmon',
      '/../../assets/images/salmon.jpg',
        '#fafafa', [
            new Ingredient('Salmon', 350)
        ]),
      new Recipe('Sandwich',
      'Sandwich',
      '/../../assets/images/sandwich.jpg',
       '#fafafa', [
           new Ingredient('Bread', 1)
       ]),
      new Recipe('Sandwiches',
       'Sweet roll soufflé cookie marshmallow cake oat cake toffee bonbon.',
      '/../../assets/images/sandwiches.jpg',
       '#fafafa', [
           new Ingredient('Bread', 1),
           new Ingredient('Cheese', 150)
       ]),
      new Recipe('Pizza',
      'Candy donut pudding. Cotton candy jujubes oat cake tiramisu powder dessert.',
      '/../../assets/images/pizza.jpg',
       '#fafafa', [
           new Ingredient('Mushrooms', 4),
           new Ingredient('Cheese', 150),
           new Ingredient('Tomato sauce', 1)
       ]),
      new Recipe('Chocolate Cake', 'Chocolate Cake',
      '/../../assets/images/chocolate-cake.jpg',
       '#fafafa', [
           new Ingredient('Chocolate', 250),
           new Ingredient('Flour', 150)
       ]),
      new Recipe('Cheesecake', 'Cheesecake',
      '/../../assets/images/cheesecake.jpg',
       '#fafafa', [
           new Ingredient('Biscuits', 250),
           new Ingredient('Cheese', 150)
       ])
  ];

  constructor(private ingrService: IngredientsService) {}

  getRecipes() {
      return this.recipes.slice();
  }
  getRecipeByIndex(index: number) {
      return this.recipes[index];
  }
  addIngredientsToList(ingredients: Ingredient[]) {
    this.ingrService.addIngredients(ingredients);
  }
}
