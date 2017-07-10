import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './../../entities/product';

@Component({
  selector: '[product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()  product: Product;
  @Output() buy = new EventEmitter<Product>();

  constructor() { }

  addToCart(event: any): void {
    this.buy.emit(this.product);
  }
}

