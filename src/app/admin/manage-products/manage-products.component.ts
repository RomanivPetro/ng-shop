import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../../entities/product';
import { ProductsService } from './../../products/services/products.service';

@Component({
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
 products: Array<Product>;
  constructor(private router: Router,  
  private productsService: ProductsService) { }

  addProduct() {
    const link = ['/add'];
    this.router.navigate(link);
  }


  ngOnInit() {
      this.productsService.getProducts()
      .then(products => this.products = products)
      .catch((err) => console.log(err));
  }

}
