import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployeesByDepartment() {
    
  }

}
