import { Component, OnInit } from '@angular/core';
import { Product } from 'app/entities/product';
import {ProductsService} from 'app/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[
    ProductsService
    ]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProducts: Product[] = [];


  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product:Product){
    this.selectedProducts.push(product);
  }

  isSelected(product:Product){
    return this.selectedProducts.includes(product);
  }

  getProducts():void{
    this.productsService.getProducts().then(products => this.products = products);
  }

}
