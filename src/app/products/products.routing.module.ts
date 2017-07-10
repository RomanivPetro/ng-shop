import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent, ProductFormComponent } from '.';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent
  },
    {
    path: 'add',
    component: ProductFormComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule] 
})
export class ProductsRoutingModule { }
