import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:5000/Employee";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    // console.log("All employess extracted successfully");
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    // console.log("employee created successfully");
    
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: string): Observable<Employee>{
    // console.log("employee extracted successfully");
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:string, employee: Employee): Observable<Object>{
    // console.log("employee updated successfully");
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<Object>{
    // console.log("employee deleted successfully");
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}