import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { CreateFakeArrayPipe } from './pipe/create-fake-array.pipe';



@NgModule({
  declarations: [
    OverlayLoadingComponent,
    CreateFakeArrayPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports:[
    OverlayLoadingComponent,
    CreateFakeArrayPipe
  ]
})
export class CoreModule { }
