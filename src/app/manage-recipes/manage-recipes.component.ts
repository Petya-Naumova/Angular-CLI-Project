import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  moduleId: module.id,
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html'
})

export class ManageRecipesComponent implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {

  }

  ngOnInit(){

  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
