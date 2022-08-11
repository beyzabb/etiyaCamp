import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';
import {SkeletonModule} from 'primeng/skeleton';



@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    CardSkeletonComponent
  ],
  imports: [
    CommonModule,
    SkeletonModule
  ],
  exports:[
    NavbarComponent,
    MainLayoutComponent,
    CardSkeletonComponent
  ]
})
export class SharedModule { }
