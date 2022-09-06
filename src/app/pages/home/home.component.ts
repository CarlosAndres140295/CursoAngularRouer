import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  limit : number= 10;
  offset : number = 0;
  products: Product[] = [];
  productId : string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsService.getAll(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
    this.route.queryParamMap.subscribe((params) => {
      this.productId = params.get('product');
      console.log(this.productId);
    });
  }

  onLoadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}
