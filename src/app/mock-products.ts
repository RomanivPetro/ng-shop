import {Product} from './entities/product';
import { Categories } from './entities/categories';

export const PRODUCTS: Product[] = [
  {name:"Asus K50", description : "laptop", price : 200, category: Categories.Electronics, isAvailable: true},
  {name:"Lenovo K50", description : "laptop", price : 500, category: Categories.Electronics, isAvailable: true},
  {name:"Dell Latitude E74", description : "laptop", price : 400, category: Categories.Electronics, isAvailable: true},
];