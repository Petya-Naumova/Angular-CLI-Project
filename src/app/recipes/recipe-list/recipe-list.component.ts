import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    '/../../assets/images/pancakes.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 
    '/../../assets/images/pancakes.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
