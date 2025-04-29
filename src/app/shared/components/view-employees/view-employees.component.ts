import { Component, OnInit } from '@angular/core';
import { DepartmentType } from '../../../model/util/DepartmentType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../model/Employee';
import { EmployeeService } from '../../../service/employee/employee.service';

@Component({
  selector: 'app-view-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css'
})
export class ViewEmployeesComponent implements OnInit{
  DepartmentType = DepartmentType;

  departmentList = Object.values(DepartmentType);

  departmentFilter: DepartmentType = DepartmentType.ALL;
  searchText: string = '';
  employees: Employee[] = [];

  constructor(private employeeService : EmployeeService) {}

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = response;
    });
  }

  onDepartmentFilterChange(department: DepartmentType) {

    if (department === DepartmentType.ALL) {
      this.loadAllEmployees();
      return;
    }

    this.employeeService.getEmployeesByDepartment(department).subscribe((response) => {
      this.employees = response;
    });
  }

  onSearchChange(text: string) {
    if (!text) {
        this.loadAllEmployees();
    }
  }

  search(type: string) {
    if (type === "name") {

      this.employeeService.getEmployeesByName(this.searchText).subscribe((response) => {
        this.employees = response;
      })

    } else {
      this.employeeService.getEmployeeByEmail(this.searchText).subscribe((response) => {
        this.employees = [response];
      })
    }
  }
}
