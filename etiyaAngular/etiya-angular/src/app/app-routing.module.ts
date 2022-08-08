import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './features/orders/components/order-list/order-list.component';
import { CustomerDashboardComponent } from './features/customers/pages/customer-dashboard/customer-dashboard.component';
import { CustomerFormComponent } from './features/customers/pages/customer-form/customer-form.component';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { ProductDashboardComponent } from './features/products/pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './features/products/pages/product-form/product-form.component';

const routes: Routes = [

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
