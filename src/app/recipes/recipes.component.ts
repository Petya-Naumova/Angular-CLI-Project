import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
 // moduleId: module.id,
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipeService: RecipeService){

  }

  ngOnInit(){
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe; 
        }
      )
  }
}
