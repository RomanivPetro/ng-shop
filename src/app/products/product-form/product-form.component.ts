import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';

import { Product } from './../../entities/product';
import { ProductsService } from './../services/products.service';



@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})


export class ProductFormComponent implements OnInit, OnDestroy {
  product: Product;

  constructor(
    private productService: ProductsService,
     private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '','',null, null, null);
  }

  ngOnDestroy(): void {
  }

  saveProduct() {
    let task = new Product(
      this.product.id,
      this.product.name,
      this.product.description,
      this.product.price,
      this.product.category,
      this.product.isAvailable
    );

    
    //if (task.id) {
     // this.productService.updateTask(task);
   // }
   // else {
      this.productService.addProduct(task);
    //}
  }

  goBack(): void {
      this.router.navigate(['/home']);
  }
}

