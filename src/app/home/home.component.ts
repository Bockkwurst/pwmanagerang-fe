import { Component } from '@angular/core';
import {LandingComponent} from "../landing-head/landing.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {DefaultButtonComponent} from "../default-button/default-button.component";

@Component({
  imports: [
    DefaultButtonComponent,
    LandingComponent,
    NavbarComponent
  ],
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  onLoginClick() {
    console.log('Login clicked');
  }

  onRegisterClick() {
    console.log('Register clicked');
  }
}
