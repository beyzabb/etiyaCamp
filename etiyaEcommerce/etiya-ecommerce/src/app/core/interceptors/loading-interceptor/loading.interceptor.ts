import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method!="GET"){ //methodu get olmadığı zaman loading service çalıştırır
      console.log("get methodu çağırıldı")
    }
    return next.handle(request).pipe(
      finalize(()=>{ //olay tamamlandığında veya error verdiğinde finalize çalışır
        console.log("istek bitti")
        this.loadingService.setIsLoading(false)
      })
    )
  }
}
