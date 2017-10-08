import { Recipe } from './models/recipe.model';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://angular-cooking-app.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
    getRecipes() {
        return this.http.get('https://angular-cooking-app.firebaseio.com/recipes.json');
    }
}
