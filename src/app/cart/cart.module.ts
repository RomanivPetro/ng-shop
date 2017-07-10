import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart.routing.module';
import { CartListComponent, CartItemComponent, CartService } from '.'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [CartListComponent, CartItemComponent],
  providers:[CartService]
})
export class CartModule { }
