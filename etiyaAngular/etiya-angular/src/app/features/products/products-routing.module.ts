import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/auth/guards/login.guard';
import { ProductFormComponent } from './pages/product-form/product-form.component';

const routes: Routes = [
  {path:"add-product",component:ProductFormComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
