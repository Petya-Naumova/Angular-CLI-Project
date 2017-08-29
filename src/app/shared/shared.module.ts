import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/index';


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

    ]
})

export class SharedModule {
    
}
