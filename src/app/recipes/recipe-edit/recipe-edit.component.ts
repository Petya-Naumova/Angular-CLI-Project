import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode = false;

  rForm: FormGroup;
  post: any;
  description: '';
  name: '';
  imageRecipePath: '';

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'imageRecipePath': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
    });
  }

  editForm(post) {
    console.log(this.recipe);
    this.recipe.name = post.name;
    this.recipe.imageRecipePath = post.imageRecipePath;
    this.recipe.description = post.description;
    this.name = post.name;
    this.description = post.description;
    this.imageRecipePath = post.imageRecipePath;
  }
  addForm(post) {
      this.recipe.name = post.name;
      this.recipe.imageRecipePath = post.imageRecipePath;
      this.recipe.description = post.description;
      this.name = post.name;
      this.description = post.description;
      this.imageRecipePath = post.imageRecipePath;
  }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.recipe = this.recipeService.getRecipeByIndex(this.id);
        }
      );
  }

}
