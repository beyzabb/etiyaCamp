import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';

import {RatingModule} from 'primeng/rating';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceFormComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TableModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ServicesModule { }
