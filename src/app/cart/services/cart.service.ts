import { Injectable } from '@angular/core';
import {CartItem} from 'app/entities/cartitem';
import {Product} from 'app/entities/product';

import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CartService {

  private itemsInCartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  private itemsInCart: CartItem[] = [];
  constructor() { 
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

   public addToCart(item: Product) {
     var newItem = this.generateNewItem(item);

    this.itemsInCartSubject.next([...this.itemsInCart, newItem]);
  }

  public removeFromCart(item: CartItem){
     this.itemsInCart = this.itemsInCart.filter(t => t !== item);
       this.itemsInCartSubject.next([...this.itemsInCart]);
  }

  public getItems(): Observable<CartItem[]> {
    return this.itemsInCartSubject;
  }

  private generateNewItem(item:Product){
    var cartItem : CartItem = {id: item.id, item:item, count : 1}
    return cartItem;
  }

  public makeOrder(items:CartItem[]):Promise<boolean>{
    return Promise.resolve(true);
  }
}
