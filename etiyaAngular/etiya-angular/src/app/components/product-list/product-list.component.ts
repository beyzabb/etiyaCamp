
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  today: number = Date.now();
  productList!: Product[] //productList:any[]=[]
  cartItems:any[]=[]
  filterText:string="";
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts()
    }, 1000);
    
  }
  
  getProducts(){
    this.productsService.getProducts().subscribe(response=>{
      this.productList=response;
    })
  }

  addToCart(product:Product){
    let itemToFind=this.cartItems.find(c=>c==product)
    if(!itemToFind){
      this.cartItems.push(product)
    }
    else{
      console.log("Ürün zaten ekli!")
    }
    
  }

}
