import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/index';
import { Recipe, Ingredient } from './models/index';

@NgModule({
    imports: [
        CommonModule,
        DirectivesModule
    ],
    declarations: [
    ],
    exports: [
      CommonModule,
      DirectivesModule,
      Recipe,
      Ingredient
    ]
})

export class SharedModule {

}
