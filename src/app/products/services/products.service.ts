import { Injectable } from '@angular/core';

import {Product} from 'app/entities/product';
import {PRODUCTS} from 'app/entities/mock-products';

@Injectable()
export class ProductsService {

  constructor() { }
   getProducts(): Promise<Product[]> {
  return Promise.resolve(PRODUCTS);}

    getProduct(id: number | string): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

   addProduct(product: Product): void {
    PRODUCTS.push(product);
  }
}


