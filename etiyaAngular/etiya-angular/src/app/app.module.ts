import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component'
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { SaleDirective } from './directives/sale/sale.directive';
import { FilterProductPipe } from './pipes/filter-product/filter-product.pipe';
import { ClickedProductCardDirective } from './directives/clicked-product-card/clicked-product-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryListComponent,
    CustomerFormComponent,
    CustomerDashboardComponent,
    ProductFormComponent,
    ProductDashboardComponent,
    KdvPipe,
    SaleDirective,
    FilterProductPipe,
    ClickedProductCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
