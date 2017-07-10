import { Component, OnInit } from '@angular/core';

import { Product } from './../../entities/product';
import { CartItem } from './../../entities/cartitem';
import { ProductsService } from './../services/products.service';
import {CartService} from './../../cart/.';

@Component({
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    console.log(this.products);
    this.productsService.getProducts()
      .then(products => this.products = products)
      .catch((err) => console.log(err));
  }

    addToCart(product: Product): void {
     this.cartService.addToCart(product)
  }
}
