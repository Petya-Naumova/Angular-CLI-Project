import { SharedModule } from './../shared/shared.module';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { IngredientsService } from './ingredients.service';
import { Ingredient} from './../shared/models'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html'
})

export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription

  constructor(private ingrService: IngredientsService) {}

  ngOnInit() {
    this.ingredients = this.ingrService.getIngredients();
    this.subscription = this.ingrService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
