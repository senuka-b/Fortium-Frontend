import { Component } from '@angular/core';
import { DepartmentType } from '../../../model/util/DepartmentType';
import { EmployeeService } from '../../../service/employee/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.css'
})
export class ManageEmployeeComponent {
    DepartmentType = DepartmentType;

    constructor(private employeeService: EmployeeService) {}

    departmentList = Object.values(DepartmentType).filter((element) => element !== DepartmentType.ALL);

    employeeName: string = '';
    employeeID: number = 0;
    employeeEmail: string = '';
    employeeDepartment: DepartmentType = DepartmentType.FINANCE;
    createdDate: string = '';

    searchText: string = '';

    prettifyDate(date?: string) {
      if (!date) return "empty!"
  
      return new Date(date!).toLocaleDateString();
    }

    searchEmployee() {
      this.employeeService.getEmployeeByEmail(this.searchText).subscribe((response) => {
        console.log(response);
        

        this.employeeName = response.name;
        this.employeeEmail = response.email;
        this.employeeDepartment = response.department;
        this.createdDate = this.prettifyDate(this.createdDate),
        this.employeeID = response.id!;

      }, (error) => {

        console.log(error);
        

        Swal.fire(
          {
            icon: "error",
            title: "Oops!",
            text: error.error
          }
        )
      })
    }

    updateEmployee() {
      this.employeeService.updateEmployee({
        id: this.employeeID,
        name: this.employeeName,
        email: this.employeeEmail,
        department: this.employeeDepartment,
        createdAt: this.createdDate,
        updatedAt: new Date().toISOString()

      }).subscribe((response) => {

        
        Swal.fire(
          {
            icon: "success",
            title: "Succesful!",
            text: "Successfully updated employee with ID " + response.id
          }
          
        )

        this.resetForm();
      }, (error) => {

        console.log(error);
        

        Swal.fire(
          {
            icon: "error",
            title: "Oops!",
            text: error.error
          }
        )
      })
    }

    deleteEmployee() {
      this.employeeService.deleteEmployeeByID(this.employeeID).subscribe((response) => {
        Swal.fire(
          {
            icon: "success",
            title: "Succesful!",
            text: "Successfully deleted employee with ID " + this.employeeID
          }
        )

        this.resetForm();

      }, (error) => {
        Swal.fire(
          {
            icon: "error",
            title: "Oops!",
            text: error.error
          }
        )
      })
    }

    resetForm() {
      this.searchText = '';
      this.employeeID = 0;
      this.employeeName = '';
      this.employeeEmail = '';
      
    }
}
