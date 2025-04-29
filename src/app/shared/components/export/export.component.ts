import { Component } from '@angular/core';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { EmployeeService } from '../../../service/employee/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-export',
  imports: [],
  templateUrl: './export.component.html',
  styleUrl: './export.component.css',
})
export class ExportComponent {
  private csvConfig = mkConfig({
    useKeysAsHeaders: true,
    filename: 'employees',
  });

  constructor(private employeeService: EmployeeService) {}

  exportToCSV() {
    this.employeeService.getEmployees().subscribe((response) => {
      const csv = generateCsv(this.csvConfig)(response);

      download(this.csvConfig)(csv);

      Swal.fire({
        icon: 'success',
        title: 'Succesfully generated CSV!',
        text: 'The CSV File has been downloaded to your computer!',
      });
    });
  }
}
