import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OverlayTitleComponent,
  SideFilterComponent,
  NavbarComponent
  ]
})
export class SharedModule { }
