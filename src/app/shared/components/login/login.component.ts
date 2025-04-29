import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe((response) => {
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Welcome to Fortium Partners! " + response.fullName
      });

      this.authService.saveToLocalStorage(response.token);

      this.router.navigate(["/dashboard/add-employee"])

    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Invalid email or password! Please try again"
      })
    })
  }


}
