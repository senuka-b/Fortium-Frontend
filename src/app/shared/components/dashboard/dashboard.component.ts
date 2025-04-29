import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private authService: AuthService, private router: Router) {}

  signout() {
    this.authService.logout();

    this.router.navigate(["/"]);

  }

}
