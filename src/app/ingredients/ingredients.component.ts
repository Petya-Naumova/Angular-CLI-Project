import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';

@Component({
  // moduleId: module.id,
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html'
})

export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingrService: IngredientsService) {}

  ngOnInit() {
    this.ingredients = this.ingrService.getIngredients();
    this.ingrService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
}
