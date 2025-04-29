import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './shared/components/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './shared/components/view-employees/view-employees.component';
import { ManageEmployeeComponent } from './shared/components/manage-employee/manage-employee.component';
import { ExportComponent } from './shared/components/export/export.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { AuthGuard } from './guard/auth-guard.guard';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "signup",
        component: SignupComponent,

    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],


        children: [
            {
                path: "add-employee",
                component: AddEmployeeComponent,
                canActivate: [AuthGuard]

            },
            {
                path: "view-employees",
                component: ViewEmployeesComponent,
                canActivate: [AuthGuard]

            },
            {
                path: "manage-employees",
                component: ManageEmployeeComponent,
                canActivate: [AuthGuard]

            },
            {
                path: "export",
                component: ExportComponent,
                canActivate: [AuthGuard]

            }
        ]
        
    }
    
];
