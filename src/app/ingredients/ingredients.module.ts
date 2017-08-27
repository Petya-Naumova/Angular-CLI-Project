import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IngredientsRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IngredientsComponent,
    EditComponent
  ],
  exports: [
    IngredientsComponent
  ],
   providers: []
})

export class IngredientsModule {

}
