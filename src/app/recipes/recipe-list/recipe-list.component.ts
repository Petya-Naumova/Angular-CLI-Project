import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  @Output() childChanged = new EventEmitter<string>();

  recipes: Recipe[];
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }
  onChange(value: string) {
    this.childChanged.emit(value);
  }
}
