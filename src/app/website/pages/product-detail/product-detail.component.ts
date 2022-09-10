import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product : Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location  : Location

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProductById();
    })
  }

  getProductById(){
    this.productsService.getProductById(this.productId).subscribe(product => {
      this.product = product
    });
    console.log(this.product);

  }

  goToBack(){
    this.location.back();
  }

}
