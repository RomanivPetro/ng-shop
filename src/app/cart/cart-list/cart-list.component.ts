import { Component, OnInit } from '@angular/core';
import { CartItem } from './../../entities/cartitem';
import { CartService } from './../services/cart.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  public shoppingCartItems$: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];
  public estimatedShipping: number;
  private shipping: number = 5;
  public total:number;

  constructor(private cartService: CartService,private router: Router) { 
     this.shoppingCartItems$ = this
      .cartService
      .getItems();

      this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  deleteFromCart(item:CartItem){
       this.cartService.removeFromCart(item);
       this.shoppingCartItems = this.shoppingCartItems.filter(t => t !== item);
  }

  calculateTotalPrice():number{
      var sum = 0;
      this.shoppingCartItems.forEach(function(selected){
        sum += selected.count * selected.item.price;
      });
    
      this.estimatedShipping = sum*(this.shipping/100);
      this.total = sum + this.estimatedShipping;  

      return sum;
  }

  makeOrder(){
    console.log("MakeOrder");
    this.cartService.makeOrder(this.shoppingCartItems)
    .then(
        () => 
        this.router.navigate(["/"])
    )
  }

  ngOnInit() {
  }

}
