import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { environment } from 'src/environments/environment';

import { MessageResultModel } from '../../models/messageResultModel';
import { LocalStorageService } from '../../storage/services/local-storage.service';
import { UserForLoginModel } from '../models/userForLoginModel';
import { UserLoginResponseModel } from '../models/userLoginResponseModel';
import { AuthStates } from '../store/auth.reducers';
import { TokenUserModel } from '../models/tokenUserModel';
import { removeTokenUserModel, setTokenUserModel } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
  .select(state => state.appAuth)
  .pipe(map(state => state.tokenUserModel));

  apicontrollerUrl: string = `${environment.apiUrl}/auth`;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService, 
    private jwtHelperService: JwtHelperService,
    private store: Store<AuthStates>) { }

  login(userForLoginModel: UserForLoginModel): Observable<UserLoginResponseModel> {
    return this.httpClient.post<UserLoginResponseModel>(`${this.apicontrollerUrl}/login`, userForLoginModel)
  }

  saveAuth(userLoginResponseModel: UserLoginResponseModel) {
    this.localStorageService.set('token', userLoginResponseModel.access_token);
    this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));
  }

  test():Observable<MessageResultModel>{
    return this.httpClient.get<MessageResultModel>(`${this.apicontrollerUrl}/test`)
  }

  get isAuthendicated(): boolean {
    if (!this.jwtHelperService.tokenGetter()) return false
    if (this.jwtHelperService.isTokenExpired()) return false
    return true;
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel })); // tokenUserModel -> tokenUserModel:tokenUserModel ile aynı
  }

  removeUserToken() {
    this.store.dispatch(removeTokenUserModel());
  }
  
  logOut() {
      this.removeUserToken()
      this.localStorageService.remove('token');
      
  }

}

export function tokenGetter() {
  return localStorage.getItem('token');
}


