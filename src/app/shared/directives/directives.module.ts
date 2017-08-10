import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropdown.directive';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DropDownDirective,
    ],
    exports: [
        DropDownDirective
    ]
})
export class DirectivesModule { }
