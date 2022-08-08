import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartSummaryService } from '../../services/cart-summary.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartSummary!:CartItem[]
  constructor(private cartService:CartSummaryService) { }

  ngOnInit(): void {
    this.showCartSummary()
  }

  
  showCartSummary(){
    this.cartService.addCart.subscribe(cartItem =>{
      console.log(cartItem)
      this.cartSummary = cartItem
    })
  }

  removeFromCart(value:CartItem){
    this.cartService.removeFromCart(value)
  }

}
