import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent, ProductComponent, ProductFormComponent, ProductsService } from '.'; 
import { ProductsRoutingModule } from './products.routing.module';
import {CartService} from '../cart/.';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  providers:[ProductsService],
  declarations: [ProductListComponent, ProductComponent, ProductFormComponent]
})
export class ProductsModule { }
