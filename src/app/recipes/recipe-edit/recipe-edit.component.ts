import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RecipeService } from './../recipe.service';
import { Ingredient } from '../../shared/models';
import { Recipe } from '../../shared/models/recipe.model';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  recipes;
  id: number;
  editMode = false;
  ingredients: Ingredient[];
  backgroundColor: '';

  rForm: FormGroup;
  post: any;
  description: '';
  name: '';
  imageRecipePath: '';

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.recipe = this.recipeService.getRecipeByIndex(this.id);
          this.recipes = this.recipeService.getRecipes();
        }
      );
  }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'imageRecipePath': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
    });
  }

  addForm(post) {
    this.recipe = {
      name: post.name,
      description: post.description,
      imageRecipePath: post.imageRecipePath,
      backgroundColor: '#ECECEC',
      ingredients: post.ingredients
    }
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipe);
    this.recipes.push(this.recipe);
    console.log(this.recipes);
  }

  onCancel() {
    this.router.navigate(['recipes']);
  }

  editForm(post) {
    console.log('this: ', this);
    // overwrite recipe properties
    this.recipe.name = post.name;
    this.recipe.imageRecipePath = post.imageRecipePath;
    this.recipe.description = post.description;
    // overwrite properties of ng-template
    this.name = post.name;
    this.description = post.description;
    this.imageRecipePath = post.imageRecipePath;
  }

}
