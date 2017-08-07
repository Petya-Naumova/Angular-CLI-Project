import { DropDownDirective } from './../dropdown.directive';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DropDownDirective
    ],
    exports: [
        DropDownDirective
    ]
})
export class DirectivesModule { }

