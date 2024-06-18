import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InfoboxComponent} from "./infobox/infobox.component";
import {DefaultButtonComponent} from "./default-button/default-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoboxComponent, DefaultButtonComponent],
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