import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe('Lemon Cake', 'Lemon Cake',
    '/../../assets/images/lemon-cake.jpg'),
    new Recipe('Pancakes', 'Try these marvelous pancakes, very easy to make',
    '/../../assets/images/pancakes.jpg'),
    new Recipe('Sandwiches', 'Sandwiches',
    '/../../assets/images/sandwiches.jpg'),
    new Recipe('Cake', 'This is how you can make very tasty cake only with...',
    '/../../assets/images/cake.jpg'),
    new Recipe('Pizza', 'Pizza',
    '/../../assets/images/pizza.jpg'),
    new Recipe('Chocolate Cake', 'Chocolate Cake',
    '/../../assets/images/chocolate-cake.jpg'),
    new Recipe('Cheesecake', 'Cheesecake',
    '/../../assets/images/cheesecake.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
