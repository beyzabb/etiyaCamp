import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../../products/models/product';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {
  addCart: EventEmitter<any>=new EventEmitter;
  constructor() { }

  get CartItems():any{
    return CartItems
  }

  set CartItems(cartItem:CartItem){
    let item = CartItems.find((c) => c.product.id === cartItem.product.id);
    if (item) ++item.quantity;
    else CartItems.push(cartItem);  
    this.addCart.emit(CartItems)
  }

  removeFromCart(cartItem:CartItem){
    let item:any = CartItems.find(c=>c.product.id === cartItem.product.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }
}
