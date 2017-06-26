import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  private recipeItemActive = false;
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

}
