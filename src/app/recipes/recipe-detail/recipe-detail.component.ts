import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { RecipeService } from './../recipe.service';
import { Recipe } from '../../shared/models/recipe.model';
import { DataStorageService } from './../../shared/data-storage.service';
import { Response } from '@angular/http';

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
    private router: Router,
    private dataStorageService: DataStorageService) {
   }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.fetchSelectedRecipe();
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
  fetchSelectedRecipe() {
    this.recipe = this.recipeService.getRecipeByIndex(this.id);
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    )
    this.router.navigate(['/recipes']);
  }
}
