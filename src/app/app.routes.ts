import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './shared/components/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './shared/components/view-employees/view-employees.component';
import { ManageEmployeeComponent } from './shared/components/manage-employee/manage-employee.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,

        children: [
            {
                path: "add-employee",
                component: AddEmployeeComponent
            },
            {
                path: "view-employees",
                component: ViewEmployeesComponent
            },
            {
                path: "manage-employees",
                component: ManageEmployeeComponent
            }
        ]
        
    }
    
];
