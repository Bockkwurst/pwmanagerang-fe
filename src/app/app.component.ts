import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InfoboxComponent} from "./infobox/infobox.component";
import {DefaultButtonComponent} from "./default-button/default-button.component";
import {LandingHeadComponent} from "./landing-head/landing-head.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoboxComponent, DefaultButtonComponent, LandingHeadComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulartest';

  onLoginClick() {
    console.log('Login clicked');
  }

  onRegisterClick() {
    console.log('Register clicked');
  }
}
