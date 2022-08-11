import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  productList!: Product[]
  fetchStatus = 'pending';
  pageSize = 10
  @Input() categoryId!: number;
  constructor(private productService: ProductsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllProductsByCategoryId()
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 1500);
  }

  getAllProductsByCategoryId(){
    if(!this.categoryId || this.categoryId <= 0){
      this.getAllProducts()
      return
    }
    this.fetchStatus = 'pending'
    setTimeout(() => {
      this.productService.getAllByCategories(this.categoryId).subscribe((response =>{
        this.productList = response;
        this.fetchStatus = 'loaded'
      }),
      (error) =>{
        this.fetchStatus = 'error'
      })
    }, 1500);
  
  }

  getAllProducts() {
    this.productService.getAll().subscribe(response => {
      this.productList = response
      this.fetchStatus = 'loaded'
    },
      (error) => {
        this.fetchStatus = "error"
      })

  }

}
