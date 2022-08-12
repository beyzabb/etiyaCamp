import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor/loading.interceptor';
import { StorageModule } from './storage/storage.module';
import { LoginComponent } from './auth/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StorageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
    CreateFakeArrayPipe,
    LoadingComponent
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ]
})
export class CoreModule { }
