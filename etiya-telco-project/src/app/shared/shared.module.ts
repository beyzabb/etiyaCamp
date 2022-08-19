import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoTitleComponent } from './components/info-title/info-title.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent,
    InfoTitleComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent,
    InfoTitleComponent,
    MainLayoutComponent
  ]
})
export class SharedModule { }
