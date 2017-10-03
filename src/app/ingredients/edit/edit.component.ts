import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/models';
import { IngredientsService } from '../ingredients.service';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit, OnDestroy {
    @ViewChild('form') ingredientsForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Ingredient;

    constructor(private ingrService: IngredientsService) { }

    ngOnInit() {
        this.subscription = this.ingrService.startedEditing
        .subscribe(
            (index: number) => {
                this.editedItemIndex = index;
                this.editMode = true;
                this.editedItem = this.ingrService.getIngredient(index);
                this.ingredientsForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            }
        );
    }

    onSubmitItem(form: NgForm) {
        const value = form.value;

        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.ingrService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.ingrService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }

    onClear() {
        this.ingredientsForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.ingrService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
