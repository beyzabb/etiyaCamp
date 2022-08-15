import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { CreateFakeArrayPipe } from './pipe/create-fake-array.pipe';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';


@NgModule({
  declarations: [
    OverlayLoadingComponent,
    CreateFakeArrayPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  exports:[
    OverlayLoadingComponent,
    CreateFakeArrayPipe
  ]
})
export class CoreModule { }
