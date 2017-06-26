import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { IngredientsService } from '../ingredients.service';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

    constructor(private ingrService: IngredientsService) { }

    ngOnInit() { }

    onAddItem(form: NgForm) {
        const value = form.value;

        const newIngredient = new Ingredient(value.name, value.amount);
        this.ingrService.addIngredient(newIngredient);
    }
}
