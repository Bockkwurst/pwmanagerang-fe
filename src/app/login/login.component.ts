import { Component } from '@angular/core';
import {DefaultButtonComponent} from "../default-button/default-button.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultButtonComponent,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {
  }

  onLogin(event: Event) {
    event.preventDefault();
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          alert('Login successful');
        } else {
          console.log('Login failed');
          alert('Login failed');
        }
      },
      error => {
        console.log('Login failed');
        alert('Login failed');
      }
    );
  }
}
