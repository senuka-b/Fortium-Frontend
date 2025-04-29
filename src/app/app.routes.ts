import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './shared/components/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,

        children: [
            {
                path: "add-employee",
                component: AddEmployeeComponent
            }
        ]
        
    }
    
];
