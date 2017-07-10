import {Product} from './product';
import { Categories } from './categories';

export const PRODUCTS: Product[] = [
  {id: 1,name:"Asus K50", description : "laptop", price : 200, category: Categories.Electronics, isAvailable: true},
  {id: 2,name:"Lenovo K50", description : "laptop", price : 500, category: Categories.Electronics, isAvailable: true},
  {id: 3,name:"Dell Latitude E74", description : "laptop", price : 400, category: Categories.Electronics, isAvailable: true},
];