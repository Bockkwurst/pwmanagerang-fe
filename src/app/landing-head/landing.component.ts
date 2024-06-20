import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DefaultButtonComponent} from "../default-button/default-button.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DefaultButtonComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  onLoginClick() {
    console.log('Login clicked');
  }

  onRegisterClick() {
    console.log('Register clicked');
  }
}
