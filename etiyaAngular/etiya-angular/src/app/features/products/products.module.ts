import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { ClickedProductCardDirective } from './directives/clicked-product-card/clicked-product-card.directive';
import { FilterProductPipe } from './pipes/filter-product/filter-product.pipe';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { CartModule } from '../cart/cart.module';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    SaleDirective,
    ClickedProductCardDirective,
    FilterProductPipe,
    KdvPipe,
    ProductDashboardComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    CartModule
  ],
  exports:[
    ProductCardComponent,
    ProductListComponent]
})
export class ProductsModule { }
