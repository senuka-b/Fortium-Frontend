import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  fullName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  createAccount() {
    this.authService.signup(this.username, this.password, this.fullName).subscribe((response) => {

       Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Welcome to Fortium Partners! " + response.fullName
        });

        this.authService.saveToLocalStorage(response.token);

        this.router.navigate(["/dashboard/add-employee"]);

    }, (error) => {


      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Unable to create an account for you... Please try again"
      })
    })
  }

}
