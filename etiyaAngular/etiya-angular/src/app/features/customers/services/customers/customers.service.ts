import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/features/customers/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiControllerUrl:string=`${environment.apiUrl}/customers`
  constructor(private httpClient:HttpClient) { }

  add(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl,customer)

  }
  getList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiControllerUrl)}

  deleteCustomer(id:number):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${id}`);
  }
  
  getCustomerById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/${id}`)
  }

  update(customer:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>("http://localhost:3000/customers/"+customer.id,customer)
  }
}
