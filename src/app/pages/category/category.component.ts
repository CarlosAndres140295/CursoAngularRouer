import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  @Input() productId (id : string | null){
    if(id){
      this.onShowDetail(id);
    }
  }
  @Output() showProduct = new EventEmitter<string>();

  categoryId: string | null =null;
  limit : number= 10;
  offset : number = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product | null = null;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';



  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      this.getProductByCategoryId();
    })
  }

  getProductByCategoryId() {
    this.productsService.getByCategory(this.categoryId, this.limit, this.offset).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
  }

  onLoadMore() {
    this.productsService.getByCategory(this.categoryId, this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

  onShowDetail(id: string) {
    this.showProduct.emit(id);
  }

}
