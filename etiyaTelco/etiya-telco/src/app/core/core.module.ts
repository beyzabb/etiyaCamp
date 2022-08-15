import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { CreateFakeArrayPipe } from './pipe/create-fake-array.pipe';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';
import { StorageService } from './storage/services/local-storage/storageService';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt'
import { LocalStorageService } from './storage/services/local-storage/local-storage.service';
import { LoginComponent } from './auth/pages/login/login.component';

export function jwtOptionsFactory(storageService:StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000']
  }
}

@NgModule({
  declarations: [
    OverlayLoadingComponent,
    CreateFakeArrayPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService]
      }
    })
  ],
  exports:[
    OverlayLoadingComponent,
    CreateFakeArrayPipe
  ]
})
export class CoreModule { }
