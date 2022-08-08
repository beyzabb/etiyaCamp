import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartSummaryService } from './services/cart-summary.service';


@NgModule({
  declarations: [
  
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[CartSummaryComponent],
  providers:[CartSummaryService]
})
export class CartModule { }
