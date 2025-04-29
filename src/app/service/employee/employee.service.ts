import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentType } from '../../model/util/DepartmentType';
import { Observable } from 'rxjs';
import { Employee } from '../../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  getEmployeesByDepartment(department: DepartmentType) : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}?department=${department}`);
  }

  getEmployeesByName(name: string) : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}?name=${name}`);
  }

  getEmployeeByEmail(email: string) : Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${email}`);
  }

  createEmployee(employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, employee);
  }

  updateEmployee(employee: Employee) : Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}`, employee);
  }

  deleteEmployeeByID(id: number) : Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.baseUrl}/${id}`);
  }

}
