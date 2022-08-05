import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsModule } from '../features/products/products.module';
import { CategoriesModule } from '../features/categories/categories.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    CategoriesModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
