import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected =  new EventEmitter<Recipe>();  

    private recipes: Recipe [] = [
      new Recipe('Lemon Cake', 'Cupcake ipsum dolor sit amet jelly apple pie sesame snaps biscuit.',
      '/../../assets/images/lemon-cake.jpg', '#fafafa'),
      new Recipe('Pancakes', 'Try these marvelous pancakes, very easy to make',
      '/../../assets/images/pancakes.jpg', '#fafafa'),
      new Recipe('Cake', 'This is how you can make very tasty cake only with...',
      '/../../assets/images/cake.jpg', '#fafafa'),
      new Recipe('Tomato and Mozzarella', 'Tomato and Mozzarella',
      '/../../assets/images/tomato-mozzarella.jpg', '#fafafa'),
      new Recipe('Salmon', 'Salmon',
      '/../../assets/images/salmon.jpg', '#fafafa'),
      new Recipe('Sandwich', 'Sandwich',
      '/../../assets/images/sandwich.jpg', '#fafafa'),
      new Recipe('Sandwiches', 'Sweet roll soufflé cookie marshmallow cake oat cake toffee bonbon.',
      '/../../assets/images/sandwiches.jpg', '#fafafa'),
      new Recipe('Pizza', 'Candy donut pudding. Cotton candy jujubes oat cake tiramisu powder dessert.',
      '/../../assets/images/pizza.jpg', '#fafafa'),
      new Recipe('Chocolate Cake', 'Chocolate Cake',
      '/../../assets/images/chocolate-cake.jpg', '#fafafa'),
      new Recipe('Cheesecake', 'Cheesecake',
      '/../../assets/images/cheesecake.jpg', '#fafafa')
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}