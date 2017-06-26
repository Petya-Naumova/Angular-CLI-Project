import { Component, Input, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
