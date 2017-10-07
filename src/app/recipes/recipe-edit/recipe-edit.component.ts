import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from './../recipe.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newRecipe = new Recipe (
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['backgroundColor'],
    //   this.recipeForm.value['ingredients']
    // );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onAddIngredient() {
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0+9]*$/)
          ])
        })
      )
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeBackgroundColor = '#ECECEC';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByIndex(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imageRecipePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0+9]*$/)
              ])
            })
          )
        }

      }

    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageRecipePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
      'backgroundColor': new FormControl(recipeBackgroundColor)
    });
  }


  // constructor(
  //   private recipeService: RecipeService,
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private fb: FormBuilder,
  //   private localStorageService: LocalStorageService) {
  //   this.rForm = fb.group({
  //     'name': [null, Validators.required],
  //     'imageRecipePath': [null, Validators.required],
  //     'description': [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
  //   });
  // }

  // addForm(post) {
  //   this.recipe = {
  //     name: post.name,
  //     description: post.description,
  //     imageRecipePath: post.imageRecipePath,
  //     backgroundColor: '#ECECEC',
  //     ingredients: post.ingredients
  //   }
  //   this.recipes = this.recipeService.getRecipes();
  //   console.log(this.recipe);
  //   this.recipes.push(this.recipe);
  //   console.log(this.recipes);
  // }

  // onCancel() {
  //   this.router.navigate(['recipes']);
  // }

  // editForm(post) {
  //   console.log('this: ', this);
  //   // overwrite recipe properties
  //   this.recipe.name = post.name;
  //   this.recipe.imageRecipePath = post.imageRecipePath;
  //   this.recipe.description = post.description;
  //   // overwrite properties of ng-template
  //   this.name = post.name;
  //   this.description = post.description;
  //   this.imageRecipePath = post.imageRecipePath;
  // }

}
