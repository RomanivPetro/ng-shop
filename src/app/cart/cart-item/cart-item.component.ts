import { Component, EventEmitter, Input,Output} from '@angular/core';
import { CartItem } from './../../entities/cartitem';

@Component({
  selector: '[cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent{

  @Input()  item: CartItem;
  @Output() remove = new EventEmitter<CartItem>();
  @Output() edit = new EventEmitter<CartItem>();

  constructor() { }

  deleteItem(event: any): void {
    this.remove.emit(this.item);
  }

    editItem(event: any): void {
    this.edit.emit(this.item);
  }

}



