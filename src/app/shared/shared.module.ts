import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from './models/ingredient.model';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        DirectivesModule
    ],
    declarations: [
        Ingredient
    ],
    exports: [
        Ingredient,
        DirectivesModule,
        SharedModule
    ]
})
export class SharedModule { }
