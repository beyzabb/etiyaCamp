import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../storage/services/local-storage.service';
import { UserForLogin } from '../models/userForLogin';
import { UserLoginResponseModel } from '../models/userLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`

  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService) { }

  login(userForLoginModel:UserForLogin):Observable<UserLoginResponseModel>{
    return this.httpClient.post<UserLoginResponseModel>(
      `${this.apiControllerUrl}/login`,userForLoginModel 
      );

  }


  saveToken(userLoginResponse:UserLoginResponseModel){
    this.localStorageService.set('token',userLoginResponse.access_token)
  }
}
