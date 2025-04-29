import { Component } from '@angular/core';
import { DepartmentType } from '../../../model/util/DepartmentType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../../service/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  DepartmentType = DepartmentType;

  constructor(private employeeService: EmployeeService) {}

  departmentList = Object.values(DepartmentType);

  employeeName: string = '';
  employeeEmail: string = '';
  employeeDepartment: DepartmentType = DepartmentType.FINANCE;
  createdDate: string = new Date().toISOString().split('T')[0];

  addEmployee() {
    console.log("yes");

    
    

    if (this.validateFields()) {
      const employee = {
        name: this.employeeName,
        email: this.employeeEmail,
        department: this.employeeDepartment,
        createdAt: new Date().toISOString(),
      };

      this.employeeService.createEmployee(employee).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Employee added successfully!',
          });
          this.resetForm();
        },
        (error) => {
          

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add employee!',
            footer: error.error,
          });
        }
      );
    }
  }

  resetForm() {
    this.employeeName = '';
    this.employeeEmail = '';
    this.employeeDepartment = DepartmentType.FINANCE;
    this.createdDate = new Date().toISOString().split('T')[0];
  }

  validateFields() {
    let isValid =
      this.employeeName && this.employeeEmail && this.employeeDepartment;

    if (!isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter all the required fields!!',
      });
    }

    return isValid;
  }
}
