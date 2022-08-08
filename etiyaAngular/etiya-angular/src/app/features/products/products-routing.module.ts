import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/auth/guards/login.guard';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';

const routes: Routes = [
  {path:"dashboard/product/add",component:ProductFormComponent,canActivate:[LoginGuard]},
  {path:"dashboard/products",component:ProductDashboardComponent},
  {path:"dashboard/product/:id",component:ProductFormComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
