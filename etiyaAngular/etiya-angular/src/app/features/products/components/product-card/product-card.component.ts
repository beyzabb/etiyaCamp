import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartSummaryService } from 'src/app/features/cart/services/cart-summary.service';
import { Product } from 'src/app/features/products/models/product';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  isCard:boolean=true;
  onMouseColor:string = 'yellow'
  onSaleText:string = 'İndirim!!'
  @Input() product!:Product;
  @Output() onBtnClick=new EventEmitter();

  constructor(private cartService:CartSummaryService){}

  ngOnInit(): void {
  }

  addToCartEvent(){
    this.cartService.CartItems = {product:this.product,quantity:1}
  }

}
