import { Injectable } from '@angular/core';
import {Product} from './entities/product';
import {PRODUCTS} from './mock-products';

@Injectable()
export class ProductsService {
   getProducts(): Promise<Product[]> {
  return Promise.resolve(PRODUCTS);
}
}
