import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { EditComponent } from './edit/edit.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    IngredientsRoutingModule,
    CommonModule
  ],
  declarations: [
    IngredientsComponent,
    EditComponent
  ],
  providers: []
})

export class IngredientsModule {

}
