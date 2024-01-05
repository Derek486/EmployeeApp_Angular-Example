import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/Employee';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private urlApi = 'http://127.0.0.1:8000/api/v1/';
  public employees !: Employee[]

  constructor(private httpClient : HttpClient) {
    console.log('Using the data Employee service');
  }

  index() : Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.urlApi}employees/`)
  }

  create(data : Employee) : Observable<any> {
    return this.httpClient.post(`${this.urlApi}employees/`, data)
  }

  show(id : number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.urlApi}employees/${id}/`)
  }

  update(id: number, employee: Employee) : Observable<any> {
    return this.httpClient.put(`${this.urlApi}employees/${id}/`, employee)
  }

  delete(id: number) : Observable<any> {
    return this.httpClient.delete(`${this.urlApi}employees/${id}/`)
  }

}
