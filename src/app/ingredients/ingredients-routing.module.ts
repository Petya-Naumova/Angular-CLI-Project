import { IngredientsComponent } from './ingredients.component';
import { EditComponent } from './edit/edit.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: IngredientsComponent,
    children: [
      { path: 'edit', component: EditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule {

}
