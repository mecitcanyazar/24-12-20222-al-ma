import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../models/customers/customers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { CommonState } from 'src/app/shared/store/commonReducers';
import { addCustomer } from 'src/app/shared/store/customer/customer.actions';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  controllerUrl = `${environment.apiUrl}/customers `

  customerModel$:Observable<Customer> = this.store.select((state)=>state.customer)


  constructor(private httpClient:HttpClient,private store:Store<CommonState>) { }


  getByNationalityId(nationalityId: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.controllerUrl}?${nationalityId}`);
  }


  add(customer: Customer): Observable<Customer> { // ekleyeceğimiz şey 2.parametre post işleminde.
    return this.httpClient.post<Customer>(this.controllerUrl, customer);
  }

  addState(customer:Customer) {

    this.store.dispatch(addCustomer(customer))

}}
