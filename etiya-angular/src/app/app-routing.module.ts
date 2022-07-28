import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"homepage"},
  {path:"add-product",component:AddProductComponent},
  {path:"homepage",component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
