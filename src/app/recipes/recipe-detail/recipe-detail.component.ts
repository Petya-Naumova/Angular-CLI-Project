import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {

   }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipe = this.recipeService.getRecipeByIndex(this.id);
      }
    );
  }

  onAddToIngredientsList() {
    this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }
  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route });
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route } );
  }
}
